import { Module } from '@nestjs/common';
import { ProductDeliveryModule } from './01-product-delivery/product-delivery.module';
import { BonusCalculatorModule } from './02-bonus-calculator/bonus-calculator.module';

@Module({
  imports: [ProductDeliveryModule, BonusCalculatorModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class StratetgyPatternModule {}
