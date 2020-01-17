/*
 * @Date: 2020-01-17 16:36:43
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-17 20:52:19
 * @content: 这个类型要改
 */
import { Injectable } from '@nestjs/common';
import { User } from './users.types';
import { UserModel } from './users.model';

@Injectable()
export class UsersService {
  async findOne(username: string): Promise<any | undefined> {
    const res = await UserModel.find();
    return res.find(user => user.username === username);
  }
}
