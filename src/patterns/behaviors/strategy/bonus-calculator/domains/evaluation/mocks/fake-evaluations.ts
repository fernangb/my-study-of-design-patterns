import { EVALUATIONS } from '../../../constants';
import { Evaluation } from '../entities/evaluation.entity';

export const fakeEvaluations = [
  {
    id: 1,
    name: EVALUATIONS.EXCELENT,
    tax: 1.5,
    fixedBonus: 5000,
  },
  {
    id: 2,
    name: EVALUATIONS.GREAT,
    tax: 1.2,
    fixedBonus: 4000,
  },
  {
    id: 3,
    name: EVALUATIONS.GOOD,
    tax: 1.1,
    fixedBonus: 3000,
  },
  {
    id: 4,
    name: EVALUATIONS.REGULAR,
    tax: 1,
    fixedBonus: 2500,
  },
  {
    id: 5,
    name: EVALUATIONS.BAD,
    tax: 0.8,
    fixedBonus: 1000,
  },
] as Evaluation[];
