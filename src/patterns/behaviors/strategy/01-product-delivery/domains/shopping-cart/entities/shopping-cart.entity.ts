import { Product } from '../../product/entities/product.entity';

export class ShoppingCart {
  products: Product[];
  total: number;
}
