import { Test, TestingModule } from '@nestjs/testing';
import { MydocumentsService } from './mydocuments.service';

describe('MydocumentsService', () => {
  let service: MydocumentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MydocumentsService],
    }).compile();

    service = module.get<MydocumentsService>(MydocumentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
