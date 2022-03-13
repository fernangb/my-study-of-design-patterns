import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { AreaModule } from '../area/area.module';
import { EvaluationModule } from '../evaluation/evaluation.module';
import { InMemoryEmployeeRepository } from './repositories/in-memory-employee-repository';

@Module({
  imports: [AreaModule, EvaluationModule],
  controllers: [EmployeeController],
  providers: [EmployeeService, InMemoryEmployeeRepository],
})
export class EmployeeModule {}
