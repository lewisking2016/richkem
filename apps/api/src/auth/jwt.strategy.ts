import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class JwtStrategy implements CanActivate {
  constructor(private jwt: JwtService, private prisma: PrismaService) {}

  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    const req = ctx.switchToHttp().getRequest();
    const header: string | undefined = req.headers.authorization;
    if (!header?.startsWith("Bearer ")) throw new UnauthorizedException("Missing bearer token");
    try {
      const payload = await this.jwt.verifyAsync(header.slice(7));
      req.user = await this.prisma.user.findUnique({ where: { id: payload.sub } });
      if (!req.user) throw new Error();
      return true;
    } catch {
      throw new UnauthorizedException("Invalid or expired token");
    }
  }
}

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private roles: string[]) {}

  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    const req = ctx.switchToHttp().getRequest();
    if (!req.user) return false;
    return this.roles.includes(req.user.role);
  }
}
