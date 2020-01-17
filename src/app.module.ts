/*
 * @Date: 2019-10-22 01:00:44
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2019-12-24 16:09:00
 * @content: I
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsController } from './posts/posts.controller';
import { AuthModule } from './admin/auth/auth.module';
import { UsersModule } from './admin/users/users.module';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController, PostsController],
  providers: [AppService],
})
export class AppModule {}
