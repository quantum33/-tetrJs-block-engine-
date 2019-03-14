import { InvalidArgumentError } from '../errors/invalidArgumentError';
import { IMatrix, Matrix } from '../engine/matrix';
import { Form } from './form';
import { Block, BlockCollection } from "../engine/blockCollection";
import { Position } from "../engine/position"

/**
 * This class is much more a tetrad factory ^^
 */
export class Tetrad implements IMatrix {

    private form: Form
    private tetrad: Matrix

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

    // IMatrix impl
    getRowCount(): number {
        return this.tetrad.getRowCount()
    }
    getColumnCount(): number {
        return this.tetrad.getColumnCount()
    }
    getRows(): BlockCollection[] {
        return this.tetrad.getRows()
    }
    getBlock(pos: Position): Block {
        return this.tetrad.getBlock(pos)
    }
    getMarkedPositions(): Position[] {
        return this.tetrad.getMarkedPositions()
    }
}