import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './providers/products.service';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('products')
export class ProductsController {
  //     Product Module REQUIRMENTS
  // GET: getProductById
  // Order Module
  // POST: createOrder(product_id: string)

  constructor(private readonly productService: ProductsService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Get product by ID' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Unique product identifier',
    example: '1',
  })
  @ApiResponse({
    status: 200,
    description: 'Product fetched successfully',
  })
  @ApiResponse({
    status: 404,
    description: 'Product not found',
  })
  getProductById(@Param('id') id: string) {
    return this.productService.getpoductById(id);
  }
}
