import * as assert from 'assert';
import { Position } from '../app/engine/position';
import { Matrix } from '../app/engine/matrix';
import { IndexOutOfRangeError } from '../app/errors/outOfRangeError';

describe("Matrix unit tests", () => {
    
    it("ctor_4x5_returnsTrue", () => {
        var rows = 4;
        var cols = 5;
        var matrix = new Matrix(cols, rows);
        
        assert.equal(matrix.getRowCount(), rows)
        assert.equal(matrix.getColumnCount(), cols)
        console.log("Here is the matrix created:")
        matrix.log();
    })

    //describe.only("getBlock", () => {
    it("getBlock_validPosition_ok", () => {
        var m = new Matrix(2, 3)
        assert.doesNotThrow(() => m.getBlock(new Position(0,1)))
        assert.notEqual(m.getBlock(new Position(0,1)), null)
    })
    it("getBlock_invalidPosition_undefined", () => {
        var m = new Matrix(2, 3)
        assert.throws(() => m.getBlock(new Position(8,12)), IndexOutOfRangeError)
    })
    //})

    it("getMarkedBlockIndexes_011000_returns[1,2]", () => {
        var m = new Matrix(6, 10)
        // m.log()
        // m.getBlock(new Position(0,1)).setMarked()
        // console.log(m.getBlock(new Position(0,1)))

        let markedBlockPos = new Array<Position>()
        markedBlockPos.push(new Position(0,1))
        markedBlockPos.push(new Position(3,8))
        markedBlockPos.push(new Position(4,3))

        markedBlockPos.forEach(p => {
            m.getBlock(p).setMarked()
        })

        let indexes = m.getMarkedPositions()

        assert.equal(indexes.length, 3)

        // sort the 2 collections for ultimate "ok / equal" test
        markedBlockPos.sort((pos1, pos2) => pos1.getX() > pos2.getX() ? 1 : 0)
        indexes.sort((pos1, pos2) => pos1.getX() > pos2.getX() ? 1 : 0)
        indexes.forEach((p, i) => {
            assert.ok(p.isEqualTo(markedBlockPos[i]))
        })
        console.log(markedBlockPos)
        console.log(indexes)
    })
})