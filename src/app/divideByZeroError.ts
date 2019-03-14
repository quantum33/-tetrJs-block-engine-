export namespace MathsModuleErrors {
    export class DivideByZeroError implements Error {
        name: string;
        message: string;
        constructor(message: string) {
            this.message = message;
        }
    }
}