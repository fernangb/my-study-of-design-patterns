import { Product } from '../../product/entities/product.entity';

export class Delivery {
  name: string;
  price: number;
  distance: number;
  volume: number;
  weight: number;
  purchaseDate: Date;
  departureDate: Date;
  expectedDeliveryDate: Date;
  products: Product[];
}
