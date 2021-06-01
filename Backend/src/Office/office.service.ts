import { Injectable } from '@nestjs/common';

@Injectable()
export class OfficeService {
  getOffice(): string {
    return 'Hello World, Office!';
  }
}