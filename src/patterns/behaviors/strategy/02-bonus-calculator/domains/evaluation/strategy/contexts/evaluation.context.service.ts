import { Inject, Injectable } from '@nestjs/common';
import { IEvaluationStrategyInterface } from '../interfaces/evaluation-strategy.interface';
import { ExcelentEvaluationService } from '../strategies/excelent.evaluation.service';

@Injectable()
export class EvaluationContextService {
  constructor(
    @Inject(ExcelentEvaluationService)
    private excelentEvaluationService: ExcelentEvaluationService,
  ) {}

  getContext(name): IEvaluationStrategyInterface {
    return this.excelentEvaluationService;
  }
}
