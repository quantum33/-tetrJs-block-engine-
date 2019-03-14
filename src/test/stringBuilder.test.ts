import * as assert from 'assert';
import { StringBuilder } from '../app/utils/stringBuilder';
import { InvalidArgumentError } from "../app/errors/invalidArgumentError";

describe("StringBuilder unit tests", () => {

    it("ctor_noSeparatorSpecification_true", () => {
        var b = new StringBuilder()

        assert.equal(b.getSeparator(), "")
    })
    it("ctor_specifiedSeparatorEmptyString_true", () => {
        var b = new StringBuilder().setSeparator("")

        assert.equal(b.getSeparator(), "")
    })
    it("ctor_specifiedSeparator_true", () => {
        const sep = "_"
        var b = new StringBuilder().setSeparator(sep)

        assert.equal(b.getSeparator(), sep)
    })
    it("toString_noSeparatorSpecification_true", () => {
        var b = new StringBuilder()
                .append("hello")
                .append("world")

        assert.equal(b.toString(), "helloworld")
    })
    it("toString_specifiedSeparator_true", () => {
        var sep = "-"
        var builder = new StringBuilder().setSeparator(sep)
        const val1 = "hello"
        const val2 = "world"
        builder.append(val1)
                .append(val2)

        assert.equal(builder.toString(), val1+sep+val2)
    })
})