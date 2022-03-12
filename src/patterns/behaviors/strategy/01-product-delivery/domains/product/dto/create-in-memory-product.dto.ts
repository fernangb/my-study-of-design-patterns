import { Category } from '../../category/entities/category.entity';

export class CreateInMemoryProductDto {
  name: string;
  price: number;
  height: number;
  length: number;
  width: number;
  weight: number;
  volume: number;
  category: Category;
}
