import { Product } from './product.entity';

export class Item {
  id: number;
  product: Product;
  quantity: number;
  subtotal: number;
  total: number;
}
