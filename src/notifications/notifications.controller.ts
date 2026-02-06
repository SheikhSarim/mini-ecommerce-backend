// notifications/notifications.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { NotificationsService } from './providers/notifications.service';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Get('sendOrderNotification/:orderId')
  sendOrderNotification(@Param('orderId') orderId: string) {
    return this.notificationsService.sendOrderNotification(orderId);
  }
}
