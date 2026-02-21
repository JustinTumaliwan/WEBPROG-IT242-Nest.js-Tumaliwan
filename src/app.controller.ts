import { Controller, Get, Post, Body, Options } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api/pitwall')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Options()
  options() {
    return;
  }

  @Get()
  async fetchMessages() {
    return await this.appService.getMessages();
  }

  @Post()
  async postMessage(
    @Body() body: { driverName: string; message: string }
  ) {
    return await this.appService.addMessage(
      body.driverName,
      body.message
    );
  }
}