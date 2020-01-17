/*
 * @Date: 2020-01-17 16:46:10
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-17 16:53:23
 * @content: I
 */
import { getModelForClass, prop } from '@typegoose/typegoose';

export class Users {
  @prop()
  username: string;
  @prop()
  password: string;
}

export const UserModel = getModelForClass(Users);
