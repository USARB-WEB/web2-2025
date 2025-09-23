import { Test, TestingModule } from '@nestjs/testing';
import { StudyGroupsController } from './study_groups.controller';
import { StudyGroupsService } from './study_groups.service';

describe('StudyGroupsController', () => {
  let controller: StudyGroupsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudyGroupsController],
      providers: [StudyGroupsService],
    }).compile();

    controller = module.get<StudyGroupsController>(StudyGroupsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
