import { PartialType } from '@nestjs/mapped-types';
import { CreateBookStatusDto } from './create-book-status.dto';

export class UpdateBookStatusDto extends PartialType(CreateBookStatusDto) {}
