import { Order } from '../entities/order.entity';
import { fakeShoppingCart } from './fake-shopping-cart';

export const fakeOrders = [
  {
    id: 1,
    shoppingCart: fakeShoppingCart[0],
  },
] as Order[];
