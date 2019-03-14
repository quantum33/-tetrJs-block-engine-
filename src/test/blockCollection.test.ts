import * as assert from 'assert';
import { BlockCollection } from '../app/engine/blockCollection';

describe("BlockCollection", () => {
    
    it("ctor_lengthOf4_returnsTrue", () => {
        
        var length = 10;
        var collection = new BlockCollection(length)
        
        assert.equal(collection.length, length)
        //console.log("Here is the collection created:")
        //collection.log();
    })
    it("toString_lengthEquals5_returns00000", () => {
        
        assert.equal(new BlockCollection(5).toString(), ". . . . .")
    })
    it("fill_0100_true", () => {
        var c = new BlockCollection(4)
        c.fillWith([0, 1, 0, 0])

        assert.equal(c.toString(), ". X . .")
    })
    it("forEachBlock_setMarked_ok", () => {
        
        var c = new BlockCollection(4)
        c.forEach(b => b.setMarked(true))
        assert.equal(c.toString(), "X X X X")
    })
    it("getMarkedBlockIndexes_011000_returns[1,2]", () => {
        let c = new BlockCollection(6)
        c.fillWith([0, 1, 1, 0, 0, 0])
        let indexes = c.getMarkedBlockIndexes()
        assert.equal(indexes.length, 2)
        assert.equal(indexes[0], 1)
        assert.equal(indexes[1], 2)
    })

    it("getMarkedBlockIndexes_011000AndFunc_returns[1,2]", () => {
        let c = new BlockCollection(6)
        c.fillWith([0, 1, 1, 0, 0, 0])
        let twiceTheIndex = new Array<number>()

        let indexes = c.getMarkedBlockIndexes(i => twiceTheIndex.push(i*2))
        
        assert.equal(indexes.length, 2)
        assert.equal(indexes[0], 1)
        assert.equal(indexes[1], 2)

        assert.equal(twiceTheIndex.length, indexes.length)
        assert.equal(twiceTheIndex[0], 2)
        assert.equal(twiceTheIndex[1], 4)
    })
})

