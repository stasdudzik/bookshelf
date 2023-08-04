import { Test, TestingModule } from '@nestjs/testing';
import { BooksCollectionService } from './books-collection.service';

describe('BooksCollectionService', () => {
  let service: BooksCollectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BooksCollectionService],
    }).compile();

    service = module.get<BooksCollectionService>(BooksCollectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
