/*
 * @Date: 2020-01-19 15:57:01
 * @LastEditors: Asen Wang
 * @LastEditTime: 2020-01-19 16:03:05
 * @content: I
 */
import { prop, getModelForClass } from '@typegoose/typegoose';

export class Lives {
  @prop()
  image: string;
  @prop()
  content: string;
  @prop()
  date: string;
}

export const LivesModel = getModelForClass(Lives);
