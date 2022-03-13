export interface IDeliveryStrategy {
  getPrice(weight: number, distance: number): number;
  getDepartureDate(purchaseDate: Date): Date;
  getExpectedDeliveryDate(departureDate: Date, distance: number): Date;
  getExpectedDeliveryDays(distance: number): number;
  getWeightPrice(weight: number): number;
}
