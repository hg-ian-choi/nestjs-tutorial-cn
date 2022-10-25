/* cats/cats.controller.ts */

import { Controller, Get, HttpCode, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  /**
   * POST请求：
   *   默认响应状态码： 201
   */
  @Post()
  @HttpCode(204) // 可更改响应状态码
  create(): string {
    return 'This action adds a new cat';
  }

  /**
   * GET请求：
   *   默认响应状态码： 200
   */
  @Get()
  @HttpCode(205) // 可更改响应状态码
  findAll(): string {
    return 'This action returns all cats';
  }

  // using express Request
  @Get()
  findAll2(@Req() request: Request): string {
    return 'This action returns all cats';
  }
}
