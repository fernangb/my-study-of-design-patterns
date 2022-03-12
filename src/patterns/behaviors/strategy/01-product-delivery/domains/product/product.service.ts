import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CategoryService } from '../category/category.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InMemoryProductRepository } from './repositories/in-memory-product.repository';

@Injectable()
export class ProductService {
  constructor(
    @Inject(InMemoryProductRepository)
    private productRepository: InMemoryProductRepository,
    @Inject(CategoryService)
    private categoryService: CategoryService,
  ) {}

  create({
    categoryName,
    height,
    length,
    price,
    weight,
    width,
    name,
  }: CreateProductDto) {
    const category = this.categoryService.findByName(categoryName);

    if (!category) throw new BadRequestException('Category does not exists');

    const volume = this.getVolume(width, height, length);

    this.productRepository.create({
      height,
      length,
      price,
      weight,
      width,
      name,
      volume,
      category,
    });
  }

  findAll() {
    return this.productRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  findByName(name: string) {
    return this.productRepository.findByName(name);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }

  getVolume(width: number, height: number, length: number): number {
    return width * height * length;
  }
}
