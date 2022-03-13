import { Area } from '../../area/entities/area.entity';
import { Evaluation } from '../../evaluation/entities/evaluation.entity';

export class UpdateInMemoryEmployeeDto {
  name: string;
  salary: number;
  area: Area;
  evaluation: Evaluation;
}
