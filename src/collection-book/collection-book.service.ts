import { Injectable } from '@nestjs/common';
import { CreateCollectionBookDto } from './dto/create-collection-book.dto';
import { UpdateCollectionBookDto } from './dto/update-collection-book.dto';

@Injectable()
export class CollectionBookService {
  create(createCollectionBookDto: CreateCollectionBookDto) {
    return 'This action adds a new collectionBook';
  }

  findAll() {
    return `This action returns all collectionBook`;
  }

  findOne(id: number) {
    return `This action returns a #${id} collectionBook`;
  }

  update(id: number, updateCollectionBookDto: UpdateCollectionBookDto) {
    return `This action updates a #${id} collectionBook`;
  }

  remove(id: number) {
    return `This action removes a #${id} collectionBook`;
  }
}
