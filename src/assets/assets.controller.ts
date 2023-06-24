import { Controller, Body, Post, Get } from '@nestjs/common';
import { AssetsService } from './assets.service';

@Controller('assets')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Post()
  create(@Body() body: { id: string; symbol: string }) {
    return this.assetsService.create(body);
  }

  @Get()
  all() {
    return this.assetsService.all();
  }
}
