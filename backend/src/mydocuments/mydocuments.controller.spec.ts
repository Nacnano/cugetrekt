import { Test, TestingModule } from '@nestjs/testing';
import { MydocumentsController } from './mydocuments.controller';

describe('MydocumentsController', () => {
  let controller: MydocumentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MydocumentsController],
    }).compile();

    controller = module.get<MydocumentsController>(MydocumentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
