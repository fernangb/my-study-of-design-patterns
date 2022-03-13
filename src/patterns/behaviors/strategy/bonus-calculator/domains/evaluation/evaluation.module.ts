import { Module } from '@nestjs/common';
import { EvaluationService } from './evaluation.service';
import { EvaluationController } from './evaluation.controller';
import { EvaluationContextService } from './strategy/contexts/evaluation.context.service';
import { ExcelentEvaluationService } from './strategy/strategies/excelent.evaluation.service';
import { InMemoryEvaluationRepository } from './repositories/in-memory-evaluation.repository';
import { GreatEvaluationService } from './strategy/strategies/great.evaluation.service';
import { GoodEvaluationService } from './strategy/strategies/good.evaluation.service';
import { RegularEvaluationService } from './strategy/strategies/regular.evaluation.service';
import { BadEvaluationService } from './strategy/strategies/bad.evaluation.service';

@Module({
  controllers: [EvaluationController],
  providers: [
    EvaluationService,
    InMemoryEvaluationRepository,
    EvaluationContextService,
    ExcelentEvaluationService,
    GreatEvaluationService,
    GoodEvaluationService,
    RegularEvaluationService,
    BadEvaluationService,
  ],
  exports: [
    EvaluationService,
    InMemoryEvaluationRepository,
    EvaluationContextService,
    ExcelentEvaluationService,
    GreatEvaluationService,
    GoodEvaluationService,
    RegularEvaluationService,
    BadEvaluationService,
  ],
})
export class EvaluationModule {}
