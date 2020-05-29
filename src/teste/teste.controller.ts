import { Controller, Get } from '@nestjs/common';

@Controller('teste')
export class TesteController {
    
    @Get()
    getTeste(): JSON[] {
        const json = '{"result":true, "count":42}';
        const json2 = '{"name": "Jonas", "idade":32 }';
        const obj1 = JSON.parse(json);
        const obj2 = JSON.parse(json2);
        return [obj1,obj2];
    }


}
