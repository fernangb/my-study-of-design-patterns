import { Module } from '@nestjs/common';
import { ProductDeliveryModule } from './01-product-delivery/product-delivery.module';

@Module({
  imports: [ProductDeliveryModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class StratetgyPatternModule {}
