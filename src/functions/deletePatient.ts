import { APIGatewayProxyHandler } from "aws-lambda";
import { DynamoDB } from 'aws-sdk';



export const handle: APIGatewayProxyHandler = async (event) => {
  try {
    const { patientId } = event.pathParameters;

    const dynamodb = new DynamoDB.DocumentClient();

    await dynamodb.delete({
      TableName: 'patients',
      Key: {
        patient_id: patientId
      },
      ConditionExpression: 'attribute_exists(patient_id)'
    }).promise();

    return {
      statusCode: 204,
      body: JSON.stringify({ message: 'Paciente deletado com sucesso.' })
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