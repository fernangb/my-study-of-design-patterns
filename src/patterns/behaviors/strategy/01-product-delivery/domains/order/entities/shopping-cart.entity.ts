import { Item } from '../../product/entities/item.entity';

export class ShoppingCart {
  id: number;
  items: Item[];
  total: number;
  subtotal: number;
}
