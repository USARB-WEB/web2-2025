import { MiddlewareConsumer, Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { StudyGroup } from '../study_groups/entities/study_group.entity';
import { LoggerMiddleware } from '../../middlewares/logger.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([Student, StudyGroup])],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(StudentsController);
  }
}
