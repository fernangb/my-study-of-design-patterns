import { Module } from '@nestjs/common';
import { AreaModule } from './area/area.module';
import { EvaluationModule } from './evaluation/evaluation.module';

@Module({
  imports: [AreaModule, EvaluationModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class BonusCalculatorModule {}
