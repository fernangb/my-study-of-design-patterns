import { IEvaluationStrategyInterface } from '../interfaces/evaluation-strategy.interface';

export class ExcelentEvaluationService implements IEvaluationStrategyInterface {
  getBonus(actualBonus: any): number {
    const tax = 1.5;
    const fixedBonus = 5000;

    const bonus = fixedBonus + tax * actualBonus;

    return bonus;
  }
}
