import { IAreaStrategyInterface } from '../interfaces/area-strategy.interface';

export class DefaultAreaService implements IAreaStrategyInterface {
  getBonus(): number {
    return 1000;
  }
}
