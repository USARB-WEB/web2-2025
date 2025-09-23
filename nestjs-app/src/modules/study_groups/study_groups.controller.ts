import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudyGroupsService } from './study_groups.service';
import { CreateStudyGroupDto } from './dto/create-study_group.dto';
import { UpdateStudyGroupDto } from './dto/update-study_group.dto';

@Controller('study-groups')
export class StudyGroupsController {
  constructor(private readonly studyGroupsService: StudyGroupsService) {}

  @Post()
  create(@Body() createStudyGroupDto: CreateStudyGroupDto) {
    return this.studyGroupsService.create(createStudyGroupDto);
  }

  @Get()
  findAll() {
    return this.studyGroupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studyGroupsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudyGroupDto: UpdateStudyGroupDto) {
    return this.studyGroupsService.update(+id, updateStudyGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studyGroupsService.remove(+id);
  }
}
