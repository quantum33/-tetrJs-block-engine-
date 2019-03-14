import { InvalidArgumentError } from '../errors/invalidArgumentError';
import { IMatrix, Matrix } from '../engine/matrix';
import { Form } from './form';
import { Block, BlockCollection } from "../engine/blockCollection";

export namespace TetradFactory {
    export function getRandomTetrad(): Form {
        return getRandomElementOfEnum<Form>(Form)
    }

    function getRandomElementOfEnum<E>(e: any): E {
        let keys = Object.keys(e)
        let index = Math.floor(Math.random() * keys.length)
        let k = keys[index]
        if (typeof e[k] === 'number')
            return <any>e[k]
        return <any>parseInt(k, 10)
    }
}

/**
 * This class is much more a tetrad factory ^^
 */
export class Tetrad2 {
    
    private tetrad: IMatrix
    private form: Form

    constructor(form: Form) {
        this.form = form
        let length = this.getLengthFor(form)
        this.tetrad = new Matrix(length, length)
        this.initializeBlocks()
    }

    getLength(): number {
        return this.tetrad.getRowCount();    
    }

    getRow(index: number): BlockCollection {
        return this.tetrad.getRow(index)
    }

    getForm(): Form {
        return this.form
    }

    log() {
        this.tetrad.log()
    }

    // forEach(func: (block: Block) => void) {
    //     this.tetrad.forEachBlock(func)
    // }

    private getLengthFor(form: Form): number {
        if (form === Form.I) {
            return 4
        } else if (form === Form.J
            || form === Form.L
            || form === Form.S
            || form === Form.T
            || form === Form.Z
        ) {
            return 3
        } else if (form === Form.O) {
            return 2
        } else {
            throw new InvalidArgumentError("form");
        }
    }

    private initializeBlocks() {
        if (this.form === Form.I) {
            this.tetrad.getRow(0).fillWith([1,0,0,0])
            this.tetrad.getRow(1).fillWith([1,0,0,0])
            this.tetrad.getRow(2).fillWith([1,0,0,0])
            this.tetrad.getRow(3).fillWith([1,0,0,0])
        }
        else if (this.form === Form.J) {
            this.tetrad.getRow(0).fillWith([0,1,0])
            this.tetrad.getRow(1).fillWith([0,1,0])
            this.tetrad.getRow(2).fillWith([1,1,0])
        }
        else if (this.form === Form.L) {
            this.tetrad.getRow(0).fillWith([1,0,0])
            this.tetrad.getRow(1).fillWith([1,0,0])
            this.tetrad.getRow(2).fillWith([1,1,0])
        }
        else if (this.form === Form.O) {
            this.tetrad.getRow(0).fillWith([1,1])
            this.tetrad.getRow(1).fillWith([1,1])
        }
        else if (this.form === Form.S) {
            this.tetrad.getRow(0).fillWith([0,1,1])
            this.tetrad.getRow(1).fillWith([0,1,0])
            this.tetrad.getRow(2).fillWith([1,1,0])
        }
        else if (this.form === Form.T) {
            this.tetrad.getRow(0).fillWith([0,1,0])
            this.tetrad.getRow(1).fillWith([0,1,0])
            this.tetrad.getRow(2).fillWith([1,1,1])
        }
        else if (this.form === Form.Z) {
            this.tetrad.getRow(0).fillWith([1,1,0])
            this.tetrad.getRow(1).fillWith([0,1,0])
            this.tetrad.getRow(2).fillWith([0,1,1])
        }
    }
}