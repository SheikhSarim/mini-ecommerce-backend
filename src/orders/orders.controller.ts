import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrdersService } from './providers/orders.service';
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @Post()
  @ApiOperation({ summary: 'Create a new order' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        product_id: {
          type: 'string',
          example: '1',
        },
      },
      required: ['product_id'],
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Order created successfully',
  })
  @ApiResponse({
    status: 404,
    description: 'Product not found',
  })
  create(@Body('product_id') productId: string) {
    return this.ordersService.createOrder(productId);
  }

  @Get('placed/:id')
    @ApiOperation({ summary: 'Get placed order by ID' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Order ID',
    example: 'order-456',
  })
  @ApiResponse({
    status: 200,
    description: 'Order fetched successfully',
  })
  @ApiResponse({
    status: 404,
    description: 'Order not found',
  })
  placed(@Param('id') id: string) {
    return this.ordersService.placedOrder(id);
  }
}
