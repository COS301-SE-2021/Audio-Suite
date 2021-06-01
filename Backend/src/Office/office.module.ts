import { Module } from '@nestjs/common';
import { OfficeController } from './office.controller';
import { Office } from './office.entity';
import { OfficeService } from './office.service';

@Module({
  controllers: [OfficeController],
  providers: [Office, OfficeService]
})
export class OfficeModule {}
