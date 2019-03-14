import { InvalidArgumentError } from "../errors/invalidArgumentError"
import { IndexOutOfRangeError } from "../errors/outOfRangeError"
import { StringBuilder } from "../utils/stringBuilder"
import { Position } from "./position"

export class BlockCollection extends Array<Block> {

    constructor(length: number) {
        super();

        for (let i = 0; i < length; i++) {
            this.push(new Block())
        }
    }

    /**
     * Allow to quickly set block as marked/unmarked
     * Using number ("1") allow to better see what we decide to set as marked or not
     * @param values push "1" to set as marked
     */
    fillWith(values: Array<number>) {
        if (values == null) { return }

        values.forEach((value, i) => {
            this[i].setMarked(value === 1)
        })
    }

    getMarkedBlockIndexes(func: (index) => void = null): Array<number> {
        let result = new Array<number>()

        this.forEach((block, i) => {
            if (block.isMarked()) {
                result.push(i)
                if (func != null) {
                    func(i)
                }
            }
        })

        return result
    }

    log() {
        console.log(this.toString())
    }

    toString(): string {
        var builder = new StringBuilder().setSeparator(" ")
        this.forEach(value => {
            value.isMarked()
                ? builder.append("X")
                : builder.append(".")
        })
        return builder.toString()
    }
}

export class Block {
    
    private value: boolean
    constructor(value: boolean = false) {
        this.setMarked(value)
    }

    isMarked(): boolean {
        return this.value
    }

    setMarked(value: boolean = true) {
        this.value = value
    }
}