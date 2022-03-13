import { IAreaStrategyInterface } from '../interfaces/area-strategy.interface';

export class FinanceAreaService implements IAreaStrategyInterface {
  getBonus(): number {
    return 3000;
  }
}
