import { Module } from '@nestjs/common';
import { BonusCalculatorModule } from './bonus-calculator/bonus-calculator.module';

@Module({
  imports: [BonusCalculatorModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class StratetgyPatternModule {}
