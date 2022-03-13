import { Injectable } from '@nestjs/common';
import { CreateEvaluationDto } from '../dto/create-evaluation.dto';
import { UpdateEvaluationDto } from '../dto/update-evaluation.dto';
import { Evaluation } from '../entities/evaluation.entity';
import { fakeEvaluations } from '../mocks/fake-evaluations';

@Injectable()
export class InMemoryEvaluationRepository {
  private evaluations: Evaluation[] = fakeEvaluations;

  create(data: CreateEvaluationDto) {
    const evaluation = new Evaluation();
    evaluation.name = data.name;

    this.evaluations.push(evaluation);
  }

  findAll() {
    return this.evaluations;
  }

  findByName(name: string): Evaluation | undefined {
    return this.evaluations.find((evaluation) => evaluation.name === name);
  }

  findOne(id: number): Evaluation | undefined {
    return this.evaluations.find((evaluation) => evaluation.id === id);
  }

  update(id: number, updateEvaluationDto: UpdateEvaluationDto) {
    return `This action updates a #${id} evaluation`;
  }

  remove(id: number) {
    return `This action removes a #${id} evaluation`;
  }
}
