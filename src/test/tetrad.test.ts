import * as assert from "assert"
import { Tetrad } from "../app/tetrads/tetrad"
import { TetradHelper } from "../app/tetrads/tetradHelper"
import { Form } from "../app/tetrads/form"

describe("Tetrads unit tests", () => {
   
    it("createT_returnsTrue", () => {

        var t = new Tetrad(Form.T)
        t.log()
        assert.equal(t.getForm(), Form.T)
        assert.equal(t.getLength(), 3)        
    })
    it("createZ_returnsTrue", () => {

        let t = new Tetrad(Form.Z)
        t.log()
        assert.equal(t.getForm(), Form.Z)
        assert.equal(t.getLength(), 3)
    })
    it("getRandomTetrad", () => {

        const tries = 50
        for (var i = 0; i < tries; i++) {
           
            let form: Form = TetradHelper.getRandomTetrad()
            console.log("try #", i, ":", form)
            assert.ok(form >=0 && form < Object.keys(Form).length)
        }
    })
})
