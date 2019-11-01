/*
 * @Date: 2019-10-22 01:00:44
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-10-23 11:36:23
 * @content: I
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsController } from './posts/posts.controller';

@Module({
  imports: [],
  controllers: [AppController, PostsController],
  providers: [AppService],
})
export class AppModule {}
