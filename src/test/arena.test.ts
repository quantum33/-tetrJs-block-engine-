import * as assert from 'assert';
import { Arena } from '../app/arena';
import { Tetrad } from '../app/tetrads/tetrad';
import { Form } from '../app/tetrads/form';
import { Position } from '../app/engine/position';

describe("Arena", () => {
    
    it("addTetradWithOForm_emptyArena_ok", () => {

        let arena = new Arena(12, 6)
        arena.addTetrad(new Tetrad(Form.O), new Position(5, 0))

        let expectedPositions = new Array<Position>()
        expectedPositions.push(new Position(5, 0))
        expectedPositions.push(new Position(5, 1))
        expectedPositions.push(new Position(6, 0))
        expectedPositions.push(new Position(6, 1))

        let markedPos = arena.getMarkedPositions()
        assert.equal(markedPos.length, 4)
        expectedPositions.forEach((p) => {
            assert.ok(markedPos.findIndex(item => p.isEqualTo(item)) >=0)
        });

        arena.log()
    })
    it("collides_tetradAddedTwice_returnsFalse", () => {

        let arena = new Arena(12, 5)
        let t = new Tetrad(Form.O)
        let p = new Position(10, 3)

        arena.addTetrad(t, p)
        arena.log()
        assert.equal(arena.isColliding(t, p), true)
    })
    it("collides_onlyOneBlockCollides_true", () => {

        let tetrad = new Tetrad(Form.O)
        let arena = new Arena(10, 5)
        arena.addTetrad(tetrad, new Position(8, 3))
        arena.addTetrad(new Tetrad(Form.I), new Position(4, 1))
        let collidesPos = new Position(7, 2)
        arena.log()
        assert.equal(arena.isColliding(tetrad, collidesPos), true)
    })
})