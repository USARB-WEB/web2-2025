import { Injectable } from '@nestjs/common';
import { CreateStudyGroupDto } from './dto/create-study_group.dto';
import { UpdateStudyGroupDto } from './dto/update-study_group.dto';

@Injectable()
export class StudyGroupsService {
  create(createStudyGroupDto: CreateStudyGroupDto) {
    return 'This action adds a new studyGroup';
  }

  findAll() {
    return `This action returns all studyGroups`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studyGroup`;
  }

  update(id: number, updateStudyGroupDto: UpdateStudyGroupDto) {
    return `This action updates a #${id} studyGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} studyGroup`;
  }
}
