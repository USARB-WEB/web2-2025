import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  get(): string {
    return this.appService.get();
  }

  @Get('123')
  get123(): string {
    return this.appService.get123();
  }

  @Get('456')
  get456(): string {
    return this.appService.get456();
  }
}
