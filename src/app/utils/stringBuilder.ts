import { InvalidArgumentError } from '../errors/errors'
import { StringUtils } from "./stringUtils"

export class StringBuilder {
    private builder: Array<string>
    private separator: string = ""

    /**
     * Ctor
     * @param separator specifies the separator character (default: "")
     * note: multiple constructor are not allowed
     */
    constructor() {

        this.builder = new Array()
    }

    setSeparator(value: string): StringBuilder {
        if (value == null) {
            throw new InvalidArgumentError("separator")
        }
        this.separator = value;
        return this
    }

    getSeparator(): string { return this.separator }

    append(value: string): StringBuilder {
        this.builder.push(value)
        return this
    }

    toString(): string {
        return this.builder.join(this.separator)
    }
}