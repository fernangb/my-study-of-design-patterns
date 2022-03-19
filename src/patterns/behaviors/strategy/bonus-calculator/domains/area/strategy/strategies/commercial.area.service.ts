import { AREAS } from '../../../../constants';
import { IAreaStrategyInterface } from '../interfaces/area-strategy.interface';

export class CommercialAreaService implements IAreaStrategyInterface {
  getBonus(): number {
    return AREAS.COMMERCIAL.VALUE;
  }
}
