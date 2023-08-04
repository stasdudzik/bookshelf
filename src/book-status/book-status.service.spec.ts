import { Test, TestingModule } from '@nestjs/testing';
import { BookStatusService } from './book-status.service';

describe('BookStatusService', () => {
  let service: BookStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookStatusService],
    }).compile();

    service = module.get<BookStatusService>(BookStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
