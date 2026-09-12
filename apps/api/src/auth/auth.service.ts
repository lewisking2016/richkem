import { Injectable, UnauthorizedException, ConflictException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as argon2 from "argon2";
import { randomBytes } from "crypto";
import { PrismaService } from "../prisma/prisma.service";
import { RegisterDto, LoginDto } from "./dto";

const REFRESH_DAYS = 7;

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}

  private async tokens(userId: number, email: string, role: string) {
    const access = await this.jwt.signAsync({ sub: userId, email, role });
    const refresh = randomBytes(48).toString("hex");
    const expiresAt = new Date(Date.now() + REFRESH_DAYS * 24 * 3600 * 1000);
    await this.prisma.refreshToken.create({ data: { token: refresh, userId, expiresAt } });
    return { access, refresh, expiresIn: 900 };
  }

  async register(dto: RegisterDto) {
    const exists = await this.prisma.user.findUnique({ where: { email: dto.email } });
    if (exists) throw new ConflictException("Email already registered");
    const user = await this.prisma.user.create({
      data: {
        name: dto.name,
        email: dto.email,
        phone: dto.phone,
        passwordHash: await argon2.hash(dto.password),
      },
    });
    return { user: this.safe(user), ...(await this.tokens(user.id, user.email, user.role)) };
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({ where: { email: dto.email } });
    if (!user || !(await argon2.verify(user.passwordHash, dto.password))) {
      throw new UnauthorizedException("Invalid credentials");
    }
    return { user: this.safe(user), ...(await this.tokens(user.id, user.email, user.role)) };
  }

  async refresh(token: string) {
    const row = await this.prisma.refreshToken.findUnique({
      where: { token },
      include: { user: true },
    });
    if (!row || row.expiresAt < new Date()) throw new UnauthorizedException("Invalid refresh token");
    // rotation: single use
    await this.prisma.refreshToken.delete({ where: { token } });
    return { user: this.safe(row.user), ...(await this.tokens(row.user.id, row.user.email, row.user.role)) };
  }

  async profile(userId: number) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new UnauthorizedException();
    return this.safe(user);
  }

  safe(u: { id: number; name: string; email: string; phone: string | null; role: string; kycStatus: string; createdAt: Date }) {
    return { id: u.id, name: u.name, email: u.email, phone: u.phone, role: u.role, kycStatus: u.kycStatus, createdAt: u.createdAt };
  }
}
