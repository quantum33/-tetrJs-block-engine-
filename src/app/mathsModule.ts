import { MathsModuleErrors } from './divideByZeroError';

export namespace MathsModule {
    // export function logMe(aString:string):void {
    //     console.log(`CalcModule: ${aString}`);
    // }

    export class Calculator {
        add(a:number, b:number):number {
            return a + b;
        }
    
        sub(a:number, b:number):number {
            return a - b;
        }
    
        times(a:number, b:number):number {
            return a * b;
        }
    
        divide(a:number, b:number):number {
            if (b === 0) {
                throw new MathsModuleErrors.DivideByZeroError("divide by zero is dumb");
            }
            return a / b;
        }
    }
}