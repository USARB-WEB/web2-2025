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

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
