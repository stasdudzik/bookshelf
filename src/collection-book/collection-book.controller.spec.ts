import { Test, TestingModule } from '@nestjs/testing';
import { CollectionBookController } from './collection-book.controller';
import { CollectionBookService } from './collection-book.service';

describe('CollectionBookController', () => {
  let controller: CollectionBookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CollectionBookController],
      providers: [CollectionBookService],
    }).compile();

    controller = module.get<CollectionBookController>(CollectionBookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
