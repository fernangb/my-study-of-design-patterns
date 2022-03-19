import { AREAS } from '../../../../constants';
import { IAreaStrategyInterface } from '../interfaces/area-strategy.interface';

export class TechAreaService implements IAreaStrategyInterface {
  getBonus(): number {
    return AREAS.TECH.VALUE;
  }
}
