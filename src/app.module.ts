import { Module } from '@nestjs/common';
import { AmostraModule } from './amostra/amostra.module';

@Module({
  imports: [AmostraModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
