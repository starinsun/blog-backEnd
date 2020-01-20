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
  Put,
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
    return await PostModel.find().sort({ time: -1 });
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

  @UseGuards(AuthGuard('jwt'))
  @Get('post/:id')
  @ApiOperation({ title: '得到管理文章' })
  async getAdminPost(@Param('id') id: string) {
    return await PostModel.findById(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('post/:id')
  @ApiOperation({ title: '修改文章' })
  async changeLife(
    @Param('id') id: string,
    @Body() updatePostsDto: CreatePostsDto,
  ) {
    await PostModel.findByIdAndUpdate(id, updatePostsDto);
    return {
      msg: 'change success',
    };
  }
}
