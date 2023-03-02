/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */
import stringCalculator from './stringCalc.js'
export const lambdaHandler = async (event, context) => {
	try {
		const message = JSON.parse(event.body).message
		const returnValue = stringCalculator(message)
		return {
			statusCode: 200,
			body: JSON.stringify({
				message: returnValue,
			}),
		}
	} catch (err) {
		return {
			statusCode: 400,
			body: JSON.stringify({
				message: 'Invalid Entry',
			}),
		}
	}
}
