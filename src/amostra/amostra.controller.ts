import { Controller, Get } from '@nestjs/common';
import { Amostra } from './amostra.entity'
@Controller('amostras')
export class AmostraController {
    
    @Get()
    getAmostra(): Amostra[] {
        const amostras: Amostra[] = [];
        amostras.push(new Amostra("Amostra 1", 50, 30))
        amostras.push(new Amostra("Amostra 2", 30, 20))
        amostras.push(new Amostra("Amostra 3", 10, 5))
        
        return amostras;
    }


}
