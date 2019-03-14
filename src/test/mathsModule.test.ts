import * as assert from "assert"
import { MathsModule } from "../app/mathsModule"
import { MathsModuleErrors } from '../app/divideByZeroError';

describe("MathsModule =======", () => {

	describe("Calculator class", () => {
		it("add_withValidParams_shouldPass", () => {
			//CalcModule.logMe("I want to log this !....");
			assert.equal(15, new MathsModule.Calculator().add(7,8));
		}),
		it("sub_withValidParams_shouldPass", () => {
			assert.equal(19, new MathsModule.Calculator().sub(20, 1));
		}),
		it("times_withValidParams_shouldPass", () => {
			assert.equal(150, new MathsModule.Calculator().times(10, 15));
		}),
		it("divide_withValidParams_shouldPass", () => {
			assert.equal(5, new MathsModule.Calculator().divide(25, 5));
		}),
		it("divide_withValidParams_throwsError", () => {
			//new MathsModule.Calculator().divide(25, 0);
			assert.throws(
				() => new MathsModule.Calculator().divide(25, 0), 
				MathsModuleErrors.DivideByZeroError,
				"divide by zero exception!!!");
		})
	})
})