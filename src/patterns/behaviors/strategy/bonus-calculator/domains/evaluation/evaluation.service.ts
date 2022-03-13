import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { UpdateEvaluationDto } from './dto/update-evaluation.dto';
import { EvaluationContextService } from './strategy/contexts/evaluation.context.service';
import { InMemoryEvaluationRepository } from './repositories/in-memory-evaluation.repository';
import { Evaluation } from './entities/evaluation.entity';

@Injectable()
export class EvaluationService {
  constructor(
    @Inject(InMemoryEvaluationRepository)
    private evaluationRepository: InMemoryEvaluationRepository,
    @Inject(EvaluationContextService)
    private evaluationContext: EvaluationContextService,
  ) {}

  getBonus(name: string, salary: number): number {
    const findEvaluation = this.findByName(name);

    if (!findEvaluation) throw new BadRequestException('Invalid evaluation');

    const context = this.evaluationContext.getContext(name);

    return context.getBonus(findEvaluation, salary);
  }

  create(createEvaluationDto: CreateEvaluationDto) {
    return 'This action adds a new evaluation';
  }

  findAll(): Evaluation[] {
    return this.evaluationRepository.findAll();
  }

  findOne(id: number): Evaluation | undefined {
    return this.evaluationRepository.findOne(id);
  }

  findByName(name: string): Evaluation | undefined {
    return this.evaluationRepository.findByName(name);
  }

  update(id: number, updateEvaluationDto: UpdateEvaluationDto) {
    return `This action updates a #${id} evaluation`;
  }

  remove(id: number) {
    return `This action removes a #${id} evaluation`;
  }
}
