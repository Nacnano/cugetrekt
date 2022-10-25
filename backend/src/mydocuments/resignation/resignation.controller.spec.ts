import { Test, TestingModule } from '@nestjs/testing';
import { ResignationController } from './resignation.controller';

describe('ResignationController', () => {
  let controller: ResignationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResignationController],
    }).compile();

    controller = module.get<ResignationController>(ResignationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
