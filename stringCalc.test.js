const stringCalculator = require('./stringCalc.js')

describe('Our String Calculator', () => {
	test('should return 0 by default.', () => {
		expect(stringCalculator()).toBe(0)
	})
	test('should return single number (0) when input is only one word.', () => {
		expect(stringCalculator('zero')).toBe(0)
	})
	test('should return sum of two numbers.', () => {
		expect(stringCalculator('one + one')).toBe(2)
	})
	test('should return difference of two numbers.', () => {
		expect(stringCalculator('one - one')).toBe(0)
	})
	test('should return product of two numbers.', () => {
		expect(stringCalculator('one * one')).toBe(1)
	})
	test('should return quotient of two numbers.', () => {
		expect(stringCalculator('one / one')).toBe(1)
	})
	describe('Error Handling / Validation', () => {
		test('should throw an error for dividing by zero.', () => {
			expect(() => stringCalculator('one / zero')).toThrowError(
				'Cannot divide by zero'
			)
		})
		test('should throw error on misspelled number.', () => {
			expect(() => stringCalculator('zeroo')).toThrowError('Invalid Equation')
		})
		test('should throw an error for equation without two operands.', () => {
			expect(() => stringCalculator('one +')).toThrowError('Invalid Equation')
		})
		test('should only accept valid operands (+-*/)', () => {
			expect(() => stringCalculator('one ? zero')).toThrowError(
				'Operator Invalid'
			)
		})
		test('should only accept valid numbers as operands in first position.', () => {
			expect(() => stringCalculator('+ + zero')).toThrowError(
				'Invalid First Operand'
			)
		})
		test('should only accept valid numbers as operands in second position.', () => {
			expect(() => stringCalculator('zero - +')).toThrowError(
				'Invalid Second Operand'
			)
		})
		test('should only accept valid numbers as operands in both position.', () => {
			expect(() => stringCalculator('NaN - +')).toThrowError(
				'Invalid First Operand and Invalid Second Operand'
			)
		})
		test('should not accept equations with more than two operands.', () => {
			expect(() => stringCalculator('1 + 1 + 1')).toThrowError(
				'Invalid Equation'
			)
		})
	})
})
