import { APIGatewayProxyHandler } from "aws-lambda";
import { DynamoDB } from 'aws-sdk';



export const handle: APIGatewayProxyHandler = async (event) => {

  const dynamoDb = new DynamoDB.DocumentClient();

  try {
    let data = await dynamoDb.scan({
      TableName: 'patients'
    }).promise();

    return {
      statusCode: 200,
      body: JSON.stringify(data.Items)
    }

  } catch (error) {
    console.error(error);

    return {
      statusCode: error.statusCode ? error.statusCode : 500,
      body: JSON.stringify({
        error: error.name ? error.name : 'Exception',
        message: error.message ? error.message : 'Unknown error'
      })
    }
  }
}