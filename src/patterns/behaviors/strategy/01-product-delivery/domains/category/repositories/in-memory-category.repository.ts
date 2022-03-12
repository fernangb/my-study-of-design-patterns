import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { Category } from '../entities/category.entity';

@Injectable()
export class InMemoryCategoryRepository {
  private categories: Category[] = [];

  create(data: CreateCategoryDto) {
    const category = new Category();
    category.name = data.name;

    this.categories.push(category);
  }

  findAll() {
    return this.categories;
  }

  findByName(name: string) {
    return this.categories.find((category) => (category.name = name));
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
