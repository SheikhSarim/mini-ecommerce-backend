// notifications/providers/notifications.service.ts
import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { OrdersService } from '../../orders/providers/orders.service';

@Injectable()
export class NotificationsService {
  constructor(
    @Inject(forwardRef(() => OrdersService))
    private readonly ordersService: OrdersService,
  ) {}

  // GET /notifications/sendOrderNotification/:orderId
  sendOrderNotification(orderId: string) {
    // Fetch order details from OrdersService
    const order = this.ordersService.getOrderDetails(orderId);

    // Dummy notification logic
    return {
      message: `Order confirmation sent for ${orderId}. Product: ${order.product}, Amount: ${order.amount}`,
    };
  }
}
