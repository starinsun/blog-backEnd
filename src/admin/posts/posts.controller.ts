/*
 * @Date: 2020-01-19 16:17:20
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-19 20:18:21
 * @content: I
 */
import {
  Controller,
  UseGuards,
  Post,
  Body,
  Get,
  Delete,
  Param,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation } from '@nestjs/swagger';
import CreatePostsDto from './post.dto';
import { PostModel } from './post.model';

@Controller('admin/posts')
export class PostsController {
  @UseGuards(AuthGuard('jwt'))
  @Post()
  @ApiOperation({ title: '添加文章' })
  async addPost(@Body() createPostsDto: CreatePostsDto) {
    await PostModel.create(createPostsDto);
    return { success: true };
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  @ApiOperation({ title: '得到管理文章' })
  async getAdminPosts() {
    return await PostModel.find();
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('post/:id')
  @ApiOperation({ title: '删除文章' })
  async deletePost(@Param('id') id: string) {
    await PostModel.findByIdAndDelete(id);
    return {
      msg: 'success',
    };
  }
}
