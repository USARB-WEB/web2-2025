import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentsService {

  constructor(
    @InjectRepository(Student) private studentsRepository: Repository<Student>
  ){

  }

  async create(createStudentDto: CreateStudentDto) {
    return await this.studentsRepository.save(createStudentDto);
  }

  async findAll(): Promise<Student[]> {
    return await this.studentsRepository.find();
  }

  async findOne(id: number): Promise<Student> {
    const student = await this.studentsRepository.findOne({where: {id}});

    if (!student) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }

    return student;
  }

  async update(
    id: number,
    updateStudentDto: UpdateStudentDto,
  ): Promise<Student> {
    const student = await this.studentsRepository.findOne({ where: { id } });

    if (!student) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }
    return await this.studentsRepository.save({ ...updateStudentDto, id });
  }

  async remove(id: number) {
    const student = await this.studentsRepository.findOne({ where: { id } });

    if (!student) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }
    return await this.studentsRepository.delete(id);
  }
}
