import { Injectable } from '@nestjs/common';
import { Category } from '../../category/entities/category.entity';
import { CreateInMemoryProductDto } from '../dto/create-in-memory-product.dto';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { Product } from '../entities/product.entity';

@Injectable()
export class InMemoryProductRepository {
  private products: Product[] = [];

  create({
    name,
    height,
    length,
    price,
    weight,
    width,
    volume,
    category,
  }: CreateInMemoryProductDto) {
    const product = new Product();
    product.name = name;
    product.price = price;
    product.height = height;
    product.length = length;
    product.height = height;
    product.weight = weight;
    product.width = width;
    product.volume = volume;
    product.category = category;

    this.products.push(product);
  }

  findAll() {
    return this.products;
  }

  findByName(name: string) {
    return this.products.find((Product) => (Product.name = name));
  }

  findOne(id: number) {
    return `This action returns a #${id} Product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} Product`;
  }

  remove(id: number) {
    return `This action removes a #${id} Product`;
  }
}
