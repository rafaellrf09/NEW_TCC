import { Module } from '@nestjs/common';
import { TesteController } from './teste.controller';

@Module({
  controllers: [TesteController],
  providers: []
})
export class TesteModule {}
