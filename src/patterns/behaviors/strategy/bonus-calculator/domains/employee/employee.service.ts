import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { AreaService } from '../area/area.service';
import { EvaluationService } from '../evaluation/evaluation.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';
import { InMemoryEmployeeRepository } from './repositories/in-memory-employee-repository';

@Injectable()
export class EmployeeService {
  constructor(
    @Inject(InMemoryEmployeeRepository)
    private employeeRepository: InMemoryEmployeeRepository,
    @Inject(AreaService)
    private areaService: AreaService,
    @Inject(EvaluationService)
    private evaluationService: EvaluationService,
  ) {}

  getBonus(areaName: string, evaluationName: string, salary: number): number {
    const areaBonus = this.areaService.getBonus(areaName);
    const evaluationBonus = this.evaluationService.getBonus(
      evaluationName,
      salary,
    );

    const bonus = areaBonus + evaluationBonus;

    return bonus;
  }

  create({ areaName, evaluationName, name, salary }: CreateEmployeeDto) {
    const findEmployee = this.findByName(name);

    if (findEmployee) throw new BadRequestException('Employee already exists');

    const area = this.getArea(areaName);

    const evaluation = this.getEvaluation(evaluationName);

    const bonus = this.getBonus(area.name, evaluation.name, salary);

    this.employeeRepository.create({
      area,
      bonus,
      evaluation,
      name,
      salary,
    });
  }

  findAll(): Employee[] {
    return this.employeeRepository.findAll();
  }

  findOne(id: number): Employee | undefined {
    return this.employeeRepository.findOne(id);
  }

  getArea(areaName: string) {
    const findArea = this.areaService.findByName(areaName);

    if (!findArea) throw new BadRequestException('Invalid area');

    return findArea;
  }

  getEvaluation(evaluationName: string) {
    const findEvaluation = this.evaluationService.findByName(evaluationName);

    if (!findEvaluation) throw new BadRequestException('Invalid evaluation');

    return findEvaluation;
  }

  findByName(name: string): Employee | undefined {
    return this.employeeRepository.findByName(name);
  }

  update(
    id: number,
    { name, salary, areaName, evaluationName }: UpdateEmployeeDto,
  ) {
    const findEmployee = this.findOne(id);

    if (!findEmployee)
      throw new BadRequestException('Employee does not exists');

    const area = this.getArea(areaName);

    const evaluation = this.getEvaluation(evaluationName);

    return this.employeeRepository.update(id, {
      name,
      salary,
      evaluation,
      area,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
