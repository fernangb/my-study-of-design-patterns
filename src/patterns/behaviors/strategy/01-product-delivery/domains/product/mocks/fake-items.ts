import { Item } from '../entities/item.entity';
import { fakeProducts } from './fake-products';

export const fakeItems = [
  {
    id: 1,
    product: fakeProducts[0],
    quantity: 1,
    subtotal: fakeProducts[0].price,
    total: fakeProducts[0].price,
  },
] as Item[];
