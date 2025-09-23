import { Test, TestingModule } from '@nestjs/testing';
import { StudyGroupsService } from './study_groups.service';

describe('StudyGroupsService', () => {
  let service: StudyGroupsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudyGroupsService],
    }).compile();

    service = module.get<StudyGroupsService>(StudyGroupsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
