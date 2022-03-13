import { Module } from '@nestjs/common';
import { AreaService } from './area.service';
import { AreaController } from './area.controller';
import { InMemoryAreaRepository } from './repositories/in-memory-area.repository';
import { TechAreaService } from './strategy/strategies/tech.area.service';
import { CommercialAreaService } from './strategy/strategies/commercial.area.service';
import { FinanceAreaService } from './strategy/strategies/finance.area.service';
import { DefaultAreaService } from './strategy/strategies/default.area.service';
import { AreaContextService } from './strategy/contexts/area.context.service';

@Module({
  controllers: [AreaController],
  providers: [
    AreaService,
    InMemoryAreaRepository,
    AreaContextService,
    TechAreaService,
    CommercialAreaService,
    FinanceAreaService,
    DefaultAreaService,
  ],
})
export class AreaModule {}
