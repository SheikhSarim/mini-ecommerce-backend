import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrdersService } from './providers/orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body('product_id') productId: string) {
    return this.ordersService.createOrder(productId);
  }

  @Get('placed/:id')
  placed(@Param('id') id: string) {
    return this.ordersService.placedOrder(id);
  }
}
