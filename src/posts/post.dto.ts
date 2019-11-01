/*
 * @Date: 2019-10-23 14:39:00
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-10-23 14:39:40
 * @content: I
 */
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { IsString } from 'class-validator';

class CreatePostsDto {
  @ApiModelProperty({ description: '标题', example: ''})
  @IsNotEmpty({message: '请输入标题'})
  readonly title: string;

  @ApiModelProperty({ description: '摘要', example: '摘要' })
  readonly article: string;

  @ApiModelProperty({ description: '内容', example: '' })
  @IsString()
  readonly content: string;
}

export default CreatePostsDto
