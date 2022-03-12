import { IDelivery } from '../interfaces/delivery.interface';

export class TruckDeliveryStratetgyService implements IDelivery {
  getPrice(volume: number, distance: number): number {
    throw new Error('Method not implemented.');
  }
  getDepartureDate(): Date {
    throw new Error('Method not implemented.');
  }
  getExpectedDeliveryDate(departureDate: Date): Date {
    throw new Error('Method not implemented.');
  }
}
