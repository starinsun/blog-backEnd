/*
 * @Date: 2019-10-23 11:37:25
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-20 11:29:23
 * @content: I
 */
import { Controller, Get, Body, Param, Put } from '@nestjs/common';
import { ApiUseTags, ApiOperation } from '@nestjs/swagger';
import { PostModel } from '../admin/posts/post.model';
import CreatePostsDto from '../admin/posts/post.dto';

@Controller('posts')
@ApiUseTags('代码文章')
export class showPostsController {
  @Get()
  @ApiOperation({ title: '显示文章的列表界面' })
  async getPosts() {
    return await PostModel.find().sort({ time: -1 });
  }

  @Get('post/:id')
  @ApiOperation({ title: '显示文章的详情页面' })
  async getPostByID(@Param('id') id: string) {
    return await PostModel.findById(id);
  }

  @Put('post/:id')
  @ApiOperation({ title: '修改文章详情' })
  async putPostById(
    @Param('id') id: string,
    @Body() updatePostsDto: CreatePostsDto,
  ) {
    await PostModel.findByIdAndUpdate(id, updatePostsDto);
    return {
      updatePostsDto,
    };
  }

  @Get('list/:tags')
  @ApiOperation({ title: '根据文章类别筛选列表' })
  async getPostListByTag(@Param('tags') tags: string) {
    return await PostModel.find({ tags: `${tags}` }).sort({ time: -1 });
  }
}
