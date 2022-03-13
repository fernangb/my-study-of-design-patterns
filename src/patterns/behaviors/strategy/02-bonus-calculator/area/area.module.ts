import { Module } from '@nestjs/common';
import { AreaService } from './area.service';
import { AreaController } from './area.controller';
import { InMemoryAreaRepository } from './repositories/in-memory-area.repository';

@Module({
  controllers: [AreaController],
  providers: [AreaService, InMemoryAreaRepository],
})
export class AreaModule {}
