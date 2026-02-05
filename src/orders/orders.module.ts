import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './providers/orders.service';
import { ProductsModule } from '../products/products.module';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  imports: [ProductsModule],
})
export class OrdersModule {}
