import { Module } from '@nestjs/common';
import { EvaluationService } from './evaluation.service';
import { EvaluationController } from './evaluation.controller';
import { EvaluationContextService } from './strategy/contexts/evaluation.context.service';
import { ExcelentEvaluationService } from './strategy/strategies/excelent.evaluation.service';

@Module({
  controllers: [EvaluationController],
  providers: [
    EvaluationService,
    EvaluationContextService,
    ExcelentEvaluationService,
  ],
})
export class EvaluationModule {}
