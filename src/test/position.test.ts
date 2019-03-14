import * as assert from "assert"
import { Position } from "../app/engine/position"

describe("Position unit tests", () => {
   
    it("add_success", () => {
        
        let p = new Position(3,7)
        assert.equal(p.addToX(1).getX(), 4)
    })
})
