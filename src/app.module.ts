import { Module } from '@nestjs/common';
import { TesteModule } from './teste/teste.module';

@Module({
  imports: [TesteModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
