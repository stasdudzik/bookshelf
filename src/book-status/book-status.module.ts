import { Module } from '@nestjs/common';
import { BookStatusService } from './book-status.service';
import { BookStatusController } from './book-status.controller';

@Module({
  controllers: [BookStatusController],
  providers: [BookStatusService]
})
export class BookStatusModule {}
