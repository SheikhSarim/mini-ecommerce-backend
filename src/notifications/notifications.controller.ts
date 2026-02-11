// notifications/notifications.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { NotificationsService } from './providers/notifications.service';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Get('sendOrderNotification/:orderId')
  @Get('sendOrderNotification/:orderId')
  @ApiOperation({ summary: 'Send notification for a specific order' })
  @ApiParam({
    name: 'orderId',
    type: String,
    description: 'ID of the order to send notification for',
    example: 'order-456',
  })
  @ApiResponse({
    status: 200,
    description: 'Confirmation message for the order notification',
  })
  @ApiResponse({
    status: 404,
    description: 'Order not found',
  })
  sendOrderNotification(@Param('orderId') orderId: string) {
    return this.notificationsService.sendOrderNotification(orderId);
  }
}
