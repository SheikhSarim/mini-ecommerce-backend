import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ProductsService } from '../../products/providers/products.service';
import { NotificationsService } from '../../notifications/providers/notifications.service';

@Injectable()
export class OrdersService {
  private orders = [{}];

  constructor(
    private readonly productsService: ProductsService,
    
    @Inject(forwardRef(() => NotificationsService))
    private readonly notificationsService: NotificationsService,
  ) {}

  createOrder(product_id: string) {
    const product = this.productsService.getpoductById(product_id);

    const Order = {
      product,
      totalPrice: product?.price,
    };

    this.orders.push(Order);
    return Order;
  }

  placedOrder(id: string) {
    const order = {
      id,
      status: 'PLACED',
      amount: 100,
    };

    this.orders.push(order);
    this.notificationsService.sendOrderNotification(id);

    return order;
  }

  getOrderDetails(orderId: string) {
    return {
      product: 'Dummy Product',
      amount: 100,
      status: 'PLACED',
    };
  }
}
