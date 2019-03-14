import { StringBuilder } from '../utils/stringBuilder'
import { IndexOutOfRangeError, InvalidArgumentError } from "../errors/errors"
import { Block, BlockCollection } from './blockCollection'
import { Position } from "./engine"

export interface IMatrix {
    getRowCount(): number
    getColumnCount() : number
    getRow(index: number) : BlockCollection
    getRows(): Array<BlockCollection>
    getBlock(pos: Position): Block
    getMarkedPositions(): Array<Position>
    log(): void
}

/**
 * Represents a matrix object
 */
export class Matrix implements IMatrix {

    private matrix: Array<BlockCollection>
    
    /**
     * @constructor builds a new matrix
     * @param height the height of the matrix
     * @param width the width of the matrix
     */
    constructor(columnCount: number, rowCount: number) {

        if (rowCount < 0) { throw new InvalidArgumentError("rowCount") }
        if (columnCount < 0) { throw new InvalidArgumentError("columnCount") }

        this.matrix = new Array<BlockCollection>()
        for (var i = 0; i < rowCount; i++) {
            this.matrix.push(new BlockCollection(columnCount))
        }
    }

    /**
     * gets the number of rows
     */
    getRowCount(): number {
        return this.getRows().length
    }

    /**
     * gets the number of columns
     */
    getColumnCount(): number {
        return this.matrix[0].length
    }

    getRows(): Array<BlockCollection> {
        return this.matrix
    }

    getRow(index: number) : BlockCollection {
        if (index < 0 || index > this.getRowCount()) {
            throw new IndexOutOfRangeError()
        }
        return this.matrix[index]
    }

    /**
     * log the matrix to the console
     */
    log() {
        // header:
        var header = new StringBuilder().setSeparator(" ")
        var line = new StringBuilder()
        for (let c=0; c<this.getColumnCount(); c++) {
            header.append(c.toString())
            line.append("--")
        }
        console.log(header.toString())
        console.log(line.toString())

        this.matrix.forEach(row => row.log())
    }

    /**
     * returns a @see Block
     * @param pos the position of the block
     */
    getBlock(pos: Position): Block {
        //return this.matrix[pos.getX()][pos.getY()]
        this.check(pos)
        return this.getRow(pos.getY())[pos.getX()]
    }

    private check(pos: Position): void {
        if (pos.getX() < 0 || pos.getX() > this.getColumnCount() ||
            pos.getY() < 0 || pos.getY() > this.getRowCount()) {

            let ours = new Position(this.getColumnCount(), this.getRowCount())

            let builder = new StringBuilder().setSeparator("\n")
            builder.append("Matrix class: Position check failed.")
            //builder.append(`Compare:  ${new Position(this.getColumnCount(), this.getRowCount())}`)
            builder.append(`Compare:  ${ours.toString()}`)
            builder.append(`to yours: ${pos.toString()}`)
            throw new IndexOutOfRangeError(builder.toString())
        }
    }

    /**
     * gets the positions of the marked block
     */
    getMarkedPositions(): Array<Position> {
        
        let result = new Array<Position>()
        this.matrix.forEach((row, x) => {
            row.getMarkedBlockIndexes(i => result.push(new Position(i, x)))
        })

        return result
    }
}