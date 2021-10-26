import { APIGatewayProxyHandler } from "aws-lambda";
import { DynamoDB } from 'aws-sdk';
import { v4 as uuid } from 'uuid';



export const handle: APIGatewayProxyHandler = async(event) => {

  try {
    const { birthday, name, email, tel } = JSON.parse(event.body);
  
    const timestamp = new Date().getTime();
  
    const patient = {
      birthday,
      patient_id: uuid(),
      name,
      email,
      tel,
      status: true,
      created_at: timestamp,
      updated_at: timestamp
    }  
  
    const dynamodb = new DynamoDB.DocumentClient();
  
    await dynamodb.put({
      TableName: 'patients',
      Item: patient
    }).promise();
    
    return {
      statusCode: 201,
      body: JSON.stringify({
        message: "Paciente cadastrado com sucesso."
      }),
      headers: {
        "Content-Type": "application/json"
      }
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