import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductsService {
  private Products = [
    { id: '1', name: 'Laptop', price: 1200 },
    { id: '2', name: 'Phone', price: 800 },
  ];

  findAllproducts() {
    return this.Products;
  }

  getpoductById(id: string) {
    const product = this.Products.find((p) => p.id === id);

    if (!product) {
      throw new NotFoundException('Product not found');
    }
    
    return product;
  }
}
