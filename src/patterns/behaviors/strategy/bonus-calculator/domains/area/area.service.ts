import { Inject, Injectable } from '@nestjs/common';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
import { Area } from './entities/area.entity';
import { InMemoryAreaRepository } from './repositories/in-memory-area.repository';
import { AreaContextService } from './strategy/contexts/area.context.service';

@Injectable()
export class AreaService {
  constructor(
    @Inject(InMemoryAreaRepository)
    private areaRepository: InMemoryAreaRepository,
    @Inject(AreaContextService)
    private areaContext: AreaContextService,
  ) {}

  getBonus(name: string): number {
    const context = this.areaContext.getContext(name);

    return context.getBonus();
  }

  create(createAreaDto: CreateAreaDto) {
    return 'This action adds a new area';
  }

  findAll(): Area[] {
    return this.areaRepository.findAll();
  }

  findOne(id: number): Area | undefined {
    return this.areaRepository.findOne(id);
  }

  findByName(name: string): Area | undefined {
    return this.areaRepository.findByName(name);
  }

  update(id: number, updateAreaDto: UpdateAreaDto) {
    return `This action updates a #${id} area`;
  }

  remove(id: number) {
    return `This action removes a #${id} area`;
  }
}
