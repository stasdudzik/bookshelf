import { Test, TestingModule } from '@nestjs/testing';
import { BooksCollectionController } from './books-collection.controller';
import { BooksCollectionService } from './books-collection.service';

describe('BooksCollectionController', () => {
  let controller: BooksCollectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksCollectionController],
      providers: [BooksCollectionService],
    }).compile();

    controller = module.get<BooksCollectionController>(BooksCollectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
