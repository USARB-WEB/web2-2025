import { PartialType } from '@nestjs/swagger';
import { CreateStudyGroupDto } from './create-study_group.dto';

export class UpdateStudyGroupDto extends PartialType(CreateStudyGroupDto) {}
