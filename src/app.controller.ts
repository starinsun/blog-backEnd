/*
 * @Date: 2019-10-22 07:00:44
 * @LastEditors: Asen Wang
 * @LastEditTime: 2020-01-20 16:14:01
 * @content: I
 */
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'hello world';
  }
}
