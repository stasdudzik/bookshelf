import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookStatusService } from './book-status.service';
import { CreateBookStatusDto } from './dto/create-book-status.dto';
import { UpdateBookStatusDto } from './dto/update-book-status.dto';

@Controller('book-status')
export class BookStatusController {
  constructor(private readonly bookStatusService: BookStatusService) {}

  @Post()
  create(@Body() createBookStatusDto: CreateBookStatusDto) {
    return this.bookStatusService.create(createBookStatusDto);
  }

  @Get()
  findAll() {
    return this.bookStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookStatusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookStatusDto: UpdateBookStatusDto) {
    return this.bookStatusService.update(+id, updateBookStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookStatusService.remove(+id);
  }
}
