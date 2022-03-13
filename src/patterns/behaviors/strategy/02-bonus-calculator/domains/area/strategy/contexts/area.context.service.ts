import { Inject, Injectable } from '@nestjs/common';
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

  getContext(name): IAreaStrategyInterface {
    switch (name) {
      case 'tech':
        return this.techAreaService;
      case 'commercial':
        return this.commercialAreaService;
      case 'finance':
        return this.financeAreaService;
      default:
        return this.defaultAreaService;
    }
  }
}
