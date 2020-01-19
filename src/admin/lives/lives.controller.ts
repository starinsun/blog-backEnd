/*
 * @Date: 2020-01-19 16:17:13
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-19 17:33:15
 * @content: I
 */
import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Delete,
  Param,
} from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { LivesModel } from './lives.model';
import CreateLivesDto from './lives.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('admin/lives')
export class LivesController {
  @UseGuards(AuthGuard('jwt'))
  @Get()
  @ApiOperation({ title: '得到生活列表' })
  async getLives() {
    return await LivesModel.find();
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  @ApiOperation({ title: '创建生活' })
  async createLife(@Body() createLivesDto: CreateLivesDto) {
    await LivesModel.create(createLivesDto);
    return { success: true };
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('life/:id')
  @ApiOperation({ title: '删除生活' })
  async deleteLife(@Param('id') id: string) {
    await LivesModel.findByIdAndDelete(id);
    return {
      msg: 'success',
    };
  }
}
