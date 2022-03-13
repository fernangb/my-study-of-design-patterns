import { Inject, Injectable } from '@nestjs/common';
import { AREAS } from '../../../../constants';
import { IAreaStrategyInterface } from '../interfaces/area-strategy.interface';
import { CommercialAreaService } from '../strategies/commercial.area.service';
import { DefaultAreaService } from '../strategies/default.area.service';
import { FinanceAreaService } from '../strategies/finance.area.service';
import { TechAreaService } from '../strategies/tech.area.service';

@Injectable()
export class AreaContextService {
  constructor(
    @Inject(TechAreaService)
    private techAreaService: TechAreaService,
    @Inject(CommercialAreaService)
    private commercialAreaService: CommercialAreaService,
    @Inject(TechAreaService)
    private financeAreaService: FinanceAreaService,
    @Inject(DefaultAreaService)
    private defaultAreaService: DefaultAreaService,
  ) {}

  getContext(name: string): IAreaStrategyInterface {
    switch (name) {
      case AREAS.TECH:
        return this.techAreaService;
      case AREAS.COMMERCIAL:
        return this.commercialAreaService;
      case AREAS.FINANCE:
        return this.financeAreaService;
      default:
        return this.defaultAreaService;
    }
  }
}
