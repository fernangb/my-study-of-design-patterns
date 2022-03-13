import { IDeliveryStrategy } from '../interfaces/delivery-strategy.interface';

export class DeliveryContextService implements IDeliveryStrategy {
  private deliveryStrategy: IDeliveryStrategy;

  constructor(deliveryStrategy: IDeliveryStrategy) {
    this.deliveryStrategy = deliveryStrategy;
  }

  setDelivery(deliveryStrategy: IDeliveryStrategy) {
    this.deliveryStrategy = deliveryStrategy;
  }

  getWeightPrice(weight: number): number {
    return this.deliveryStrategy.getWeightPrice(weight);
  }

  getPrice(weight: number, distance: number): number {
    return this.deliveryStrategy.getPrice(weight, distance);
  }

  getDepartureDate(purchaseDate: Date): Date {
    return this.deliveryStrategy.getDepartureDate(purchaseDate);
  }

  getExpectedDeliveryDate(departureDate: Date, distance: number): Date {
    return this.deliveryStrategy.getExpectedDeliveryDate(
      departureDate,
      distance,
    );
  }

  getExpectedDeliveryDays(distance: number): number {
    return this.deliveryStrategy.getExpectedDeliveryDays(distance);
  }
}
