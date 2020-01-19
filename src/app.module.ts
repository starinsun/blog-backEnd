/*
 * @Date: 2019-10-22 01:00:44
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-19 16:28:17
 * @content: I
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { showPostsController } from './posts/showPosts.controller';
import { AuthModule } from './admin/auth/auth.module';
import { UsersModule } from './admin/users/users.module';
import { showLivesController } from './lives/showLives.controller';
import { LivesController as AdminLivesController } from './admin/lives/lives.controller';
import { PostsController as AdminPostsController } from './admin/posts/posts.controller';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [
    AppController,
    showPostsController,
    showLivesController,
    AdminPostsController,
    AdminLivesController,
  ],
  providers: [AppService],
})
export class AppModule {}
