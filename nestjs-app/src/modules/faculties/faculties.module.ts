import { Module } from '@nestjs/common';
import { FacultiesService } from './faculties.service';
import { FacultiesController } from './faculties.controller';

@Module({
  controllers: [FacultiesController],
  providers: [FacultiesService],
})
export class FacultiesModule {}
