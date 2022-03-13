import { Module } from '@nestjs/common';
import { AreaModule } from './domains/area/area.module';
import { EvaluationModule } from './domains/evaluation/evaluation.module';
import { EmployeeModule } from './domains/employee/employee.module';

@Module({
  imports: [AreaModule, EvaluationModule, EmployeeModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class BonusCalculatorModule {}
