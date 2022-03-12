import { Module } from '@nestjs/common';
import { CategoryModule } from './domains/category/category.module';
import { ProductModule } from './domains/product/product.module';

@Module({
  imports: [CategoryModule, ProductModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class ProductDeliveryModule {}
