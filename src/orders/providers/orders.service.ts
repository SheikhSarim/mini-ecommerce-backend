import { Injectable } from '@nestjs/common';
import { ProductsService } from '../../products/providers/products.service';

@Injectable()
export class OrdersService {
  constructor(private readonly productService: ProductsService) {}

  createOrder(product_id: string) {
    const product = this.productService.getpoductById(product_id);

    const Order = {
      product,
      totalPrice: product?.price,
    };

    return Order;
  }
}
