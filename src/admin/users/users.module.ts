/*
 * @Date: 2020-01-17 16:36:26
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-17 20:09:14
 * @content: I
 */
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
