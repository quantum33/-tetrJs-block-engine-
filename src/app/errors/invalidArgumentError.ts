export class InvalidArgumentError implements Error {
    message: string;
    name: string;

    constructor(argumentName: string) {
        this.message = `invalid argument ${argumentName}`;
    }
}