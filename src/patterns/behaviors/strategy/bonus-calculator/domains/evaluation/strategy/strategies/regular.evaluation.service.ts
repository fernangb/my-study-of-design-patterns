import { Evaluation } from '../../entities/evaluation.entity';
import { IEvaluationStrategyInterface } from '../interfaces/evaluation-strategy.interface';

export class RegularEvaluationService implements IEvaluationStrategyInterface {
  getBonus(evaluation: Evaluation, salary: number): number {
    const bonus = evaluation.fixedBonus + evaluation.tax * salary;

    return bonus;
  }
}
