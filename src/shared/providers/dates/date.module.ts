import { Module } from '@nestjs/common';
import { DateFnsProvider } from './date-fns-provider/date-fns.provider';

@Module({
  imports: [],
  controllers: [],
  providers: [DateFnsProvider],
  exports: [DateFnsProvider],
})
export class DateModule {}
