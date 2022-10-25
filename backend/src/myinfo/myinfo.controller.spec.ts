import { Test, TestingModule } from '@nestjs/testing';
import { MyInfoController } from './myinfo.controller';
import { MyInfoService } from './myinfo.service';

describe('MyInfoController', () => {
  let controller: MyInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MyInfoController],
      providers: [MyInfoService],
    }).compile();

    controller = module.get<MyInfoController>(MyInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
