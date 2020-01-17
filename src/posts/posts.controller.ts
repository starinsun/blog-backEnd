/*
 * @Date: 2019-10-23 11:37:25
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-17 21:33:09
 * @content: I
 */
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiUseTags, ApiOperation } from '@nestjs/swagger';
import { PostModel } from './post.model';
import CreatePostsDto from './post.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('posts')
@ApiUseTags('代码文章')
export class PostsController {
  @UseGuards(AuthGuard('jwt'))
  @Get()
  @ApiOperation({ title: '显示文章的列表界面' })
  async getPosts() {
    return await PostModel.find();
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  @ApiOperation({ title: '添加文章' })
  async addPost(@Body() createPostsDto: CreatePostsDto) {
    await PostModel.create(createPostsDto);
    return { success: true };
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('post/:id')
  @ApiOperation({ title: '显示文章的详情页面' })
  async getPostByID(@Param('id') id: string) {
    return await PostModel.findById(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('list/:tags')
  @ApiOperation({ title: '根据文章类别筛选列表' })
  async getPostListByTag(@Param('tags') tags: string) {
    return await PostModel.find({ tags: `${tags}` });
  }
}
