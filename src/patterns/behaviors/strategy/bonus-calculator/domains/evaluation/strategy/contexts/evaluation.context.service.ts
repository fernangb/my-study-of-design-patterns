import { Inject, Injectable } from '@nestjs/common';
import { EVALUATIONS } from '../../../../constants';
import { IEvaluationStrategyInterface } from '../interfaces/evaluation-strategy.interface';
import { BadEvaluationService } from '../strategies/bad.evaluation.service';
import { ExcelentEvaluationService } from '../strategies/excelent.evaluation.service';
import { GoodEvaluationService } from '../strategies/good.evaluation.service';
import { GreatEvaluationService } from '../strategies/great.evaluation.service';
import { RegularEvaluationService } from '../strategies/regular.evaluation.service';

@Injectable()
export class EvaluationContextService {
  constructor(
    @Inject(ExcelentEvaluationService)
    private excelentEvaluationService: ExcelentEvaluationService,
    @Inject(GreatEvaluationService)
    private greatEvaluationService: GreatEvaluationService,
    @Inject(GoodEvaluationService)
    private goodEvaluationService: GoodEvaluationService,
    @Inject(RegularEvaluationService)
    private regularEvaluationService: RegularEvaluationService,
    @Inject(BadEvaluationService)
    private badEvaluationService: BadEvaluationService,
  ) {}

  getContext(name): IEvaluationStrategyInterface {
    switch (name) {
      case EVALUATIONS.EXCELENT:
        return this.excelentEvaluationService;
      case EVALUATIONS.GREAT:
        return this.greatEvaluationService;
      case EVALUATIONS.GOOD:
        return this.goodEvaluationService;
      case EVALUATIONS.BAD:
        return this.badEvaluationService;
      default:
        return this.regularEvaluationService;
    }
  }
}
