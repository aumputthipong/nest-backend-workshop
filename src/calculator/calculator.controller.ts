import { Controller, Post } from '@nestjs/common';
import { CalculatorService } from './calculator.service';

@Controller('calculator')
export class CalculatorController {
    constructor(private readonly calculatorSerivce: CalculatorService){
    }
    @Post('add')
    addMethod(a:number, b:number):number {
        return this.calculatorSerivce.add(a,b);
    }


    @Post('subtract')
    substractMethod(a:number, b:number):number {
        return this.calculatorSerivce.subtract(a,b);
    }

}
