import { Test, TestingModule } from '@nestjs/testing';
import { BookStatusController } from './book-status.controller';
import { BookStatusService } from './book-status.service';

describe('BookStatusController', () => {
  let controller: BookStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookStatusController],
      providers: [BookStatusService],
    }).compile();

    controller = module.get<BookStatusController>(BookStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
