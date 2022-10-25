import { Test, TestingModule } from '@nestjs/testing';
import { MyInfoService } from './myinfo.service';

describe('MyInfoService', () => {
  let service: MyInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyInfoService],
    }).compile();

    service = module.get<MyInfoService>(MyInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
