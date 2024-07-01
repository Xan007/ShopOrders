import { Controller, Get } from '@nestjs/common';

@Controller('shops')
export class ShopsController {
  @Get()
  getShop() {
    return '';
  }
}
