import { Test, TestingModule } from '@nestjs/testing';
import { GenpdfService } from './genpdf.service';

describe('GenpdfService', () => {
  let service: GenpdfService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenpdfService],
    }).compile();

    service = module.get<GenpdfService>(GenpdfService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
