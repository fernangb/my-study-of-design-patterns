import { fakeItems } from '../../product/mocks/fake-items';
import { ShoppingCart } from '../entities/shopping-cart.entity';

export const fakeShoppingCart = [
  {
    id: 1,
    items: [fakeItems[0]],
    subtotal: fakeItems[0].subtotal,
    total: fakeItems[0].total,
  },
] as ShoppingCart[];
