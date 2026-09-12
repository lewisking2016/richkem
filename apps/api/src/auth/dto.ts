import { IsEmail, IsString, MinLength, MaxLength, IsOptional, Matches } from "class-validator";

export class RegisterDto {
  @IsString() @MinLength(2) @MaxLength(120) name!: string;
  @IsEmail() email!: string;
  @IsOptional() @Matches(/^\+?[0-9]{9,15}$/) phone?: string;
  @IsString() @MinLength(8) @MaxLength(72) password!: string;
}

export class LoginDto {
  @IsEmail() email!: string;
  @IsString() password!: string;
}
