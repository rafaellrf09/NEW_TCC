import { Controller, Get } from '@nestjs/common';
import { Teste } from './teste.entity'
@Controller('teste')
export class TesteController {
    
    @Get()
    getTeste(): Teste[] {
        const testes: Teste[] = [];
        testes.push(new Teste("Rola", 50))
        testes.push(new Teste("Rola2", 30))
        testes.push(new Teste("Rola3", 10))
        
        return testes;
    }


}
