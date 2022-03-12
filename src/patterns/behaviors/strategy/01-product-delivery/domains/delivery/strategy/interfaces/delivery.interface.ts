export interface IDelivery {
  getPrice(volume: number, distance: number): number;
  getDepartureDate(): Date;
  getExpectedDeliveryDate(departureDate: Date): Date;
}
