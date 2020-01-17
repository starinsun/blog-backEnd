/*
 * @Date: 2020-01-17 20:10:11
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-17 21:21:20
 * @content: I
 */
import { Controller, UseGuards, Post, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post()
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
