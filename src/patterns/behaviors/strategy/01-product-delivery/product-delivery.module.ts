import { Module } from '@nestjs/common';
import { CategoryModule } from './domains/category/category.module';
import { ProductModule } from './domains/product/product.module';
import { DeliveryModule } from './domains/delivery/delivery.module';
import { OrderModule } from './domains/order/order.module';

@Module({
  imports: [CategoryModule, ProductModule, DeliveryModule, OrderModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class ProductDeliveryModule {}
