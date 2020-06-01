import { Module } from '@nestjs/common';
import { AmostraController } from './amostra.controller';

@Module({
  controllers: [AmostraController],
  providers: []
})
export class AmostraModule {}
