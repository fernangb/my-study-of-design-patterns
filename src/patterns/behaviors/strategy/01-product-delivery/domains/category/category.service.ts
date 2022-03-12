import { Inject, Injectable, BadRequestException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InMemoryCategoryRepository } from './repositories/in-memory-category.repository';

@Injectable()
export class CategoryService {
  constructor(
    @Inject(InMemoryCategoryRepository)
    private categoryRepository: InMemoryCategoryRepository,
  ) {}

  create(data: CreateCategoryDto) {
    const categoryFound = this.categoryRepository.findByName(data.name);

    if (categoryFound)
      throw new BadRequestException('This category already exists');

    this.categoryRepository.create(data);
  }

  findAll() {
    return this.categoryRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  findByName(name: string) {
    return this.categoryRepository.findByName(name);
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
