import { Area } from '../../area/entities/area.entity';
import { Evaluation } from '../../evaluation/entities/evaluation.entity';

export class CreateInMemoryEmployeeDto {
  name: string;
  salary: number;
  area: Area;
  evaluation: Evaluation;
  bonus: number;
}
