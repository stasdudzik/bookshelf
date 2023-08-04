import { Injectable } from '@nestjs/common';
import { CreateBookStatusDto } from './dto/create-book-status.dto';
import { UpdateBookStatusDto } from './dto/update-book-status.dto';

@Injectable()
export class BookStatusService {
  create(createBookStatusDto: CreateBookStatusDto) {
    return 'This action adds a new bookStatus';
  }

  findAll() {
    return `This action returns all bookStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bookStatus`;
  }

  update(id: number, updateBookStatusDto: UpdateBookStatusDto) {
    return `This action updates a #${id} bookStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} bookStatus`;
  }
}
