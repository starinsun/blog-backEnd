/*
 * @Date: 2019-10-23 11:37:25
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-11-28 22:59:24
 * @content: I
 */
import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { ApiUseTags, ApiOperation } from '@nestjs/swagger';
import { PostModel } from './post.model';
import CreatePostsDto from './post.dto';
// import { ObjectID } from 'bson';

@Controller('posts')
@ApiUseTags('代码文章')
export class PostsController {
  @Get()
  @ApiOperation({ title: '显示文章的列表界面' })
  async getPosts() {
    return await PostModel.find();
  }

  @Post()
  @ApiOperation({ title: '添加文章' })
  async addPost(@Body() createPostsDto: CreatePostsDto) {
    await PostModel.create(createPostsDto);
    return { success: true };
  }

  @Get('post/:id')
  @ApiOperation({ title: '显示文章的详情页面' })
  async getPostByID(@Param('id') id: string) {
    return await PostModel.findById(id);
  }

  @Get('list/:tags')
  @ApiOperation({ title: '根据文章类别筛选列表' })
  async getPostListByTag(@Param('tags') tags: string) {
    return await PostModel.find({ tags: `${tags}` });
  }
}
