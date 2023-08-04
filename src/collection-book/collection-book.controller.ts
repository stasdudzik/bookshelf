import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CollectionBookService } from './collection-book.service';
import { CreateCollectionBookDto } from './dto/create-collection-book.dto';
import { UpdateCollectionBookDto } from './dto/update-collection-book.dto';

@Controller('collection-book')
export class CollectionBookController {
  constructor(private readonly collectionBookService: CollectionBookService) {}

  @Post()
  create(@Body() createCollectionBookDto: CreateCollectionBookDto) {
    return this.collectionBookService.create(createCollectionBookDto);
  }

  @Get()
  findAll() {
    return this.collectionBookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.collectionBookService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCollectionBookDto: UpdateCollectionBookDto) {
    return this.collectionBookService.update(+id, updateCollectionBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.collectionBookService.remove(+id);
  }
}
