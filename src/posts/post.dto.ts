/*
 * @Date: 2019-10-23 14:39:00
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-12-13 18:48:57
 * @content: I
 */
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

class CreatePostsDto {
  @ApiModelProperty({ description: '作者', example: '' })
  @IsNotEmpty({ message: '请输入作者' })
  readonly author: string;

  @ApiModelProperty({ description: '题目', example: '测试' })
  @IsNotEmpty({ message: '请输入题目' })
  readonly title: string;

  @ApiModelProperty({ description: '摘要', example: '' })
  @IsNotEmpty({ message: '请输入摘要' })
  readonly intro: string;

  @ApiModelProperty({ description: '内容', example: '' })
  @IsNotEmpty({ message: '请输入内容' })
  readonly content: string;

  @ApiModelProperty({ description: '标签', example: ['1', '2'] })
  @IsNotEmpty({ message: '请输入便签' })
  readonly tags: string[];

  @ApiModelProperty({ description: '时间', example: '' })
  @IsNotEmpty({ message: '请输入时间' })
  @IsString()
  readonly time: string;

  @ApiModelProperty({ description: '阅读时间', example: 10 })
  @IsNotEmpty({ message: '请输入阅读时间' })
  @IsNumber()
  readonly readtime: number;

  @ApiModelProperty({ description: '标题图像', example: '' })
  @IsNotEmpty({ message: '请输入图像地址' })
  readonly img: string;

  @ApiModelProperty({ description: '浏览数', example: 0 })
  @IsNumber()
  readonly views: number;

  @ApiModelProperty({ description: '点赞数', example: 0 })
  @IsNumber()
  readonly zan: number;

  @ApiModelProperty({ description: '评论数', example: 0 })
  @IsNumber()
  readonly comment: number;
}

export default CreatePostsDto;
