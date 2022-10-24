import { Test, TestingModule } from '@nestjs/testing';
import { GenpdfController } from './genpdf.controller';

describe('GenpdfController', () => {
  let controller: GenpdfController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GenpdfController],
    }).compile();

    controller = module.get<GenpdfController>(GenpdfController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
