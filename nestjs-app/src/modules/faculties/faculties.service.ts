import { Injectable } from '@nestjs/common';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';

@Injectable()
export class FacultiesService {
  create(createFacultyDto: CreateFacultyDto) {
    return 'This action adds a new faculty';
  }

  findAll() {
    return `This action returns all faculties`;
  }

  findOne(id: number) {
    return `This action returns a #${id} faculty`;
  }

  update(id: number, updateFacultyDto: UpdateFacultyDto) {
    return `This action updates a #${id} faculty`;
  }

  remove(id: number) {
    return `This action removes a #${id} faculty`;
  }
}
