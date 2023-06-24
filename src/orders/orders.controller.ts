import {
  Controller,
  Post,
  Get,
  Body,
  BadRequestException,
} from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async createOrder(
    @Body() data: { asset_id: string; price: number; status?: string },
  ) {
    if (data.status) {
      throw new BadRequestException(
        "It is not allowed to send the 'status' field in the request.",
      );
    }

    return await this.ordersService.create(data);
  }

  @Get()
  async getAllOrders() {
    return await this.ordersService.all();
  }
}
