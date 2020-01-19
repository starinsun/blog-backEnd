/*
 * @Date: 2020-01-19 15:57:19
 * @LastEditors: Asen Wang
 * @LastEditTime: 2020-01-19 16:09:11
 * @content: I
 */
import { IsNotEmpty } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

class CreateLivesDto {
  @ApiModelProperty({ description: '图像', example: '' })
  @IsNotEmpty({ message: '请输入图像' })
  readonly image: string;

  @ApiModelProperty({ description: '内容', example: '' })
  @IsNotEmpty({ message: '请输入内容' })
  readonly content: string;

  @ApiModelProperty({ description: '日期', example: '' })
  @IsNotEmpty({ message: '请输入日期' })
  readonly date: string;
}

export default CreateLivesDto;
