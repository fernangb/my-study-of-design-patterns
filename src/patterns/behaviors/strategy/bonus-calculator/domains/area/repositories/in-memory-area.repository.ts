import { Injectable } from '@nestjs/common';
import { CreateAreaDto } from '../dto/create-area.dto';
import { UpdateAreaDto } from '../dto/update-area.dto';
import { Area } from '../entities/area.entity';
import { fakeAreas } from '../mocks/fake-areas';

@Injectable()
export class InMemoryAreaRepository {
  private areas: Area[] = fakeAreas;

  create(data: CreateAreaDto) {
    const area = new Area();
    area.name = data.name;

    this.areas.push(area);
  }

  findAll(): Area[] {
    return this.areas;
  }

  findByName(name: string): Area | undefined {
    return this.areas.find((area) => area.name === name);
  }

  findOne(id: number): Area | undefined {
    return this.areas.find((area) => area.id === id);
  }

  update(id: number, updateAreaDto: UpdateAreaDto) {
    return `This action updates a #${id} area`;
  }

  remove(id: number) {
    return `This action removes a #${id} area`;
  }
}
