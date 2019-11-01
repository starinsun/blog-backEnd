/*
 * @Date: 2019-10-23 14:10:48
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-10-23 14:35:30
 * @content: I
 */
import { getModelForClass, prop } from '@typegoose/typegoose'

export class Posts {
  @prop()
  author: string
  @prop()
  title: string
  @prop()
  intro: string
  @prop()
  content: string
  @prop()
  tags: string[]
  @prop()
  time: string
  @prop()
  readtime: number
  @prop()
  img: string
  @prop()
  views: number
  @prop()
  zan: number
  @prop()
  comments: number
}

export const PostModel = getModelForClass(Posts)
