import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './providers/products.service';

@Controller('products')
export class ProductsController {
  //     Product Module REQUIRMENTS
  // GET: getProductById
  // Order Module
  // POST: createOrder(product_id: string)

  constructor(private readonly productService: ProductsService) {}

  @Get('/:id')
  getProductById(@Param('id') id: string) {
    return this.productService.getpoductById(id);
  }
}
