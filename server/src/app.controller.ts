import { Controller, Get, Query } from '@nestjs/common';

import { type Greeting } from '@app/types';

import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  sayHello(@Query('name') name?: string): Greeting {
    console.log(name);
    return this.appService.sayHello(name);
  }
}
