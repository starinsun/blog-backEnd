/*
 * @Date: 2019-12-24 16:24:54
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-17 21:56:32
 * @content: I
 */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstans } from './auth.constant';
import { JwtStrategy } from './jwt.strategy';

@Module({
  providers: [AuthService, LocalStrategy, JwtStrategy],
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstans.secret,
      signOptions: { expiresIn: '60000s' },
    }),
  ],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
