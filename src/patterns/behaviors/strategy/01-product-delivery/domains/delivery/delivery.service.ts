import { Inject, Injectable } from '@nestjs/common';
import { DateFnsProvider } from 'src/shared/providers/dates/date-fns-provider/date-fns.provider';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';
import { DeliveryContext } from './strategy/contexts/delivery.context.service';
import { ConventionalDeliveryService } from './strategy/strategies/conventional.delivery.service';

@Injectable()
export class DeliveryService {
  constructor(
    @Inject(DateFnsProvider)
    private dateProvider: DateFnsProvider,
  ) {}

  get() {
    const delivery = new DeliveryContext(
      new ConventionalDeliveryService(this.dateProvider),
    );
  }

  create(createDeliveryDto: CreateDeliveryDto) {
    return 'This action adds a new delivery';
  }

  findAll() {
    return `This action returns all delivery`;
  }

  findOne(id: number) {
    return `This action returns a #${id} delivery`;
  }

  update(id: number, updateDeliveryDto: UpdateDeliveryDto) {
    return `This action updates a #${id} delivery`;
  }

  remove(id: number) {
    return `This action removes a #${id} delivery`;
  }
}
