import { Inject } from '@nestjs/common';
import { DateFnsProvider } from 'src/shared/providers/dates/date-fns-provider/date-fns.provider';
import { IDeliveryStrategy } from '../interfaces/delivery-strategy.interface';

export class ConventionalDeliveryService implements IDeliveryStrategy {
  constructor(
    @Inject(DateFnsProvider)
    private dateProvider: DateFnsProvider,
  ) {}

  getWeightPrice(weight: number): number {
    const tax = 0.45;

    return tax * weight;
  }

  getPrice(weight: number, distance: number): number {
    const fixedTax = 5;
    const pricePerDay = 1.51;
    const expectedDeliveryDays = this.getExpectedDeliveryDays(distance);
    const weightPrice = this.getWeightPrice(weight);

    const price = fixedTax + pricePerDay * expectedDeliveryDays + weightPrice;

    return price;
  }

  getDepartureDate(purchaseDate: Date): Date {
    const daysToDeparture = 3;

    return this.dateProvider.addDays(purchaseDate, daysToDeparture);
  }

  getExpectedDeliveryDate(departureDate: Date, distance: number): Date {
    const expectedDeliveryDays = this.getExpectedDeliveryDays(distance);

    return this.dateProvider.addDays(departureDate, expectedDeliveryDays);
  }

  getExpectedDeliveryDays(distance: number): number {
    const kmPerDay = 100;

    return Math.round(distance / kmPerDay);
  }
}
