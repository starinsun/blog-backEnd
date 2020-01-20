/*
 * @Date: 2020-01-19 10:39:52
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-20 11:38:39
 * @content: I
 */
import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { LivesModel } from '../admin/lives/lives.model';

@Controller('lives')
export class showLivesController {
  @Get()
  @ApiOperation({ title: '得到生活列表' })
  async getLives() {
    return await LivesModel.find().sort({ date: -1 });
  }
}
