import * as assert from 'assert';
import { StringUtils } from "../app/utils/stringUtils";

describe("StringUtils unit tests", () => {
    
    describe("isNullOrEmpty", () => {
        it("withEmptyString_returnsTrue", () => {
            assert.ok(StringUtils.isNullOrEmpty(""))
        }),
        it("withNull_returnsTrue", () => {
            assert.ok(StringUtils.isNullOrEmpty(null))
        }),
        it("withAnyValue_returnsFalse", () => {
            assert.equal(StringUtils.isNullOrEmpty("hello"), false)
        })
    })
})