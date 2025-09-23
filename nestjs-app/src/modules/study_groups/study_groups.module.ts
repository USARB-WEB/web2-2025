import { Module } from '@nestjs/common';
import { StudyGroupsService } from './study_groups.service';
import { StudyGroupsController } from './study_groups.controller';

@Module({
  controllers: [StudyGroupsController],
  providers: [StudyGroupsService],
})
export class StudyGroupsModule {}
