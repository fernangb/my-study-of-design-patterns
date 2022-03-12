import { ShoppingCart } from '../../shopping-cart/entities/shopping-cart.entity';

export class CreateDeliveryDto {
  name: string;
  distance: number;
  purchaseDate: Date;
  shoppingCart: ShoppingCart[];
}
