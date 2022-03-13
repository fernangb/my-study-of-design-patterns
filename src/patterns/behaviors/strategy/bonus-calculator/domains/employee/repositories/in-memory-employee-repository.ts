import { Injectable } from '@nestjs/common';
import { CreateInMemoryEmployeeDto } from '../dto/create-in-memory-employee.dto';
import { UpdateEmployeeDto } from '../dto/update-employee.dto';
import { UpdateInMemoryEmployeeDto } from '../dto/update-in-memory-employee.dto';
import { Employee } from '../entities/employee.entity';
import { fakeEmployees } from '../mocks/fake-employees';

@Injectable()
export class InMemoryEmployeeRepository {
  private employees: Employee[] = fakeEmployees;

  create({ area, bonus, evaluation, name, salary }: CreateInMemoryEmployeeDto) {
    const employee = new Employee();
    employee.id = fakeEmployees.length + 1;
    employee.name = name;
    employee.salary = salary;
    employee.area = area;
    employee.evaluation = evaluation;
    employee.bonus = bonus;

    this.employees.push(employee);
  }

  findAll(): Employee[] {
    return this.employees;
  }

  findByName(name: string): Employee | undefined {
    return this.employees.find((employee) => employee.name === name);
  }

  findOne(id: number): Employee | undefined {
    return this.employees.find((employee) => employee.id === id);
  }

  update(id: number, updateEmployeeDto: UpdateInMemoryEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
