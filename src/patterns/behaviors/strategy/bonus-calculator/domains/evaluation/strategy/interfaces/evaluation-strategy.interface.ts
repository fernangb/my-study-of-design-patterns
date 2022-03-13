import { Evaluation } from '../../entities/evaluation.entity';

export interface IEvaluationStrategyInterface {
  getBonus(evaluation: Evaluation, salary: number): number;
}
