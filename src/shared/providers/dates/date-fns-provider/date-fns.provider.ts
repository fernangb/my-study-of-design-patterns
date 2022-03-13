import { IDateProvider } from '../interface/date.interface';
import { addDays } from 'date-fns';

export class DateFnsProvider implements IDateProvider {
  addDays(date: Date, days: number): Date {
    return addDays(date, days);
  }
}
