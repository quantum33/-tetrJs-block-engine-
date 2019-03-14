import { StringUtils } from "../utils/stringUtils"

export class IndexOutOfRangeError implements Error {
    message: string;
    name: string;

    constructor(message: string = "") {
        this.message = "Index is out of range. "

        if (!StringUtils.isNullOrEmpty(message)) {
            this.message += message
        }
    }
}