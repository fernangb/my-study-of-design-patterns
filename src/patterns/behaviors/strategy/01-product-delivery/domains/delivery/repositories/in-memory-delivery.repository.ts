import { Injectable } from '@nestjs/common';
import { CreateDeliveryDto } from '../dto/create-delivery.dto';
import { UpdateDeliveryDto } from '../dto/update-delivery.dto';
import { Delivery } from '../entities/delivery.entity';

@Injectable()
export class InMemoryDeliveryRepository {
  private deliveries: Delivery[] = [];

  create(data: CreateDeliveryDto) {
    const delivery = new Delivery();
    delivery.name = data.name;

    this.deliveries.push(delivery);
  }

  findAll() {
    return this.deliveries;
  }

  findByName(name: string) {
    return this.deliveries.find((delivery) => (delivery.name = name));
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
