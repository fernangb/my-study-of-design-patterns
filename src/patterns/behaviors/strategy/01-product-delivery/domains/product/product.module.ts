import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { CategoryModule } from '../category/category.module';
import { InMemoryProductRepository } from './repositories/in-memory-product.repository';

@Module({
  imports: [CategoryModule],
  controllers: [ProductController],
  providers: [ProductService, InMemoryProductRepository],
  exports: [ProductService],
})
export class ProductModule {}
