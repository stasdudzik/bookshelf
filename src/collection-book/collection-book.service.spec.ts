import { Test, TestingModule } from '@nestjs/testing';
import { CollectionBookService } from './collection-book.service';

describe('CollectionBookService', () => {
  let service: CollectionBookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CollectionBookService],
    }).compile();

    service = module.get<CollectionBookService>(CollectionBookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
