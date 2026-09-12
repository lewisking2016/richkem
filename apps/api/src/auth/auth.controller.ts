import { Body, Controller, Get, Post, UseGuards, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { RegisterDto, LoginDto } from "./dto";
import { JwtStrategy } from "./jwt.strategy";

@Controller("auth")
export class AuthController {
  constructor(private auth: AuthService) {}

  @Post("register")
  register(@Body() dto: RegisterDto) {
    return this.auth.register(dto);
  }

  @Post("login")
  login(@Body() dto: LoginDto) {
    return this.auth.login(dto);
  }

  @Post("refresh")
  refresh(@Body("refresh") refresh: string) {
    return this.auth.refresh(refresh);
  }

  @Get("me")
  @UseGuards(JwtStrategy)
  me(@Req() req: { user: { id: number } }) {
    return this.auth.profile(req.user.id);
  }
}
