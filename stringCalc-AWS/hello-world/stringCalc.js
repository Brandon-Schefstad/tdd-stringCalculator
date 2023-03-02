function stringCalculator(input) {
	if (!input) {
		return 0
	}

	const equationArray = input.split(' ')

	if (equationArray in numberMap) return numberMap[equationArray]
	if (equationArray.length !== 3) throw new Error('Invalid Equation')

	const [num1, operator, num2] = equationArray
	validateInputs(num1, operator, num2)

	const operation = operationMap[operator]
	const operand1 = numberMap[num1]
	const operand2 = numberMap[num2]
	return operation(operand1, operand2)
}

function validateInputs(num1, operator, num2) {
	const errorArray = []
	if (operationMap[operator] === undefined) {
		errorArray.push('Operator Invalid')
	}
	if (numberMap[num1] === undefined) {
		errorArray.push('Invalid First Operand')
	}
	if (numberMap[num2] === undefined) {
		errorArray.push('Invalid Second Operand')
	}
	if (errorArray.length > 0) {
		throw new Error(errorArray.join(' and '))
	}
}

const operationMap = {
	'+': (a, b) => a + b,
	'-': (a, b) => a - b,
	'*': (a, b) => a * b,
	'/': (a, b) => {
		if (b === 0) {
			throw new Error('Cannot divide by zero')
		} else {
			return a / b
		}
	},
}

const numberMap = {
	zero: 0,
	one: 1,
	two: 2,
	three: 3,
	four: 4,
	five: 5,
	six: 6,
	seven: 7,
	eight: 8,
	nine: 9,
}

module.exports = stringCalculator
