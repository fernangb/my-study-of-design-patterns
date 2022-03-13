import { Module } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { DeliveryController } from './delivery.controller';
import { DeliveryContext } from './strategy/contexts/delivery.context.service';
import { ConventionalDeliveryService } from './strategy/strategies/conventional.delivery.service';
import { DateModule } from 'src/shared/providers/dates/date.module';

@Module({
  imports: [DateModule],
  controllers: [DeliveryController],
  providers: [
    DeliveryService,
    DeliveryContext,
    ConventionalDeliveryService,
  ],
})
export class DeliveryModule {}
