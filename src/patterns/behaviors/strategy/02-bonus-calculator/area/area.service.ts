import { Inject, Injectable } from '@nestjs/common';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
import { InMemoryAreaRepository } from './repositories/in-memory-area.repository';

@Injectable()
export class AreaService {
  constructor(
    @Inject(InMemoryAreaRepository)
    private areaRepository: InMemoryAreaRepository,
  ) {}

  create(createAreaDto: CreateAreaDto) {
    return 'This action adds a new area';
  }

  findAll() {
    return this.areaRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} area`;
  }

  update(id: number, updateAreaDto: UpdateAreaDto) {
    return `This action updates a #${id} area`;
  }

  remove(id: number) {
    return `This action removes a #${id} area`;
  }
}
