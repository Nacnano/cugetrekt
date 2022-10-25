import { Test, TestingModule } from '@nestjs/testing';
import { ResignationService } from './resignation.service';

describe('ResignationService', () => {
  let service: ResignationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResignationService],
    }).compile();

    service = module.get<ResignationService>(ResignationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
