/*
 * @Date: 2020-01-19 10:39:52
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-19 16:47:37
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
    return await LivesModel.find();
  }
}
