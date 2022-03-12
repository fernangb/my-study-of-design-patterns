import { Module } from '@nestjs/common';
import { CategoryModule } from './domains/category/category.module';
import { ProductModule } from './domains/product/product.module';
import { DeliveryModule } from './domains/delivery/delivery.module';
import { ShoppingCartModule } from './domains/shopping-cart/shopping-cart.module';

@Module({
  imports: [CategoryModule, ProductModule, DeliveryModule, ShoppingCartModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class ProductDeliveryModule {}
