import { APIGatewayProxyHandler } from "aws-lambda";
import { DynamoDB } from 'aws-sdk';


type IPatientPatameters = {
  patientId: string;
}


export const handle: APIGatewayProxyHandler = async (event) => {
  
  try {
    const { patient_id } = event.pathParameters;

    const dynamodb = new DynamoDB.DocumentClient();

    const data = await dynamodb.get({
      TableName: 'patients',
      Key: {
        patient_id
      }
    }).promise();

    if(!data.Item) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'Paciente não existe' }, null, 2)
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify(data.Item)
    }

  } catch (error) {
    console.log(error.message);

    return {
      statusCode: error.statusCode ? error.statusCode : 500,
      body: JSON.stringify({
          message: error.message ? error.message : "Internal Error"
      })
    }
  }
}