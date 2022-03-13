import { Module } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { DeliveryController } from './delivery.controller';
import { DeliveryContextService } from './strategy/contexts/delivery.context.service';
import { ConventionalDeliveryService } from './strategy/strategies/conventional.delivery.service';
import { DateModule } from 'src/shared/providers/dates/date.module';

@Module({
  imports: [DateModule],
  controllers: [DeliveryController],
  providers: [
    DeliveryService,
    DeliveryContextService,
    ConventionalDeliveryService,
  ],
})
export class DeliveryModule {}
