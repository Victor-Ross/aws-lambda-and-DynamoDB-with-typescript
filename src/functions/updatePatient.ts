import { APIGatewayProxyHandler } from "aws-lambda";
import { DynamoDB } from 'aws-sdk';



export const handle: APIGatewayProxyHandler = async (event) => {

  try {
    const { patientId } = event.pathParameters;
    
    const { name, birthday, email, tel } = JSON.parse(event.body);
  
    const timestamp = new Date().getTime();
  
    const dynamodb = new DynamoDB.DocumentClient();
  
    await dynamodb.update({
      TableName: 'patients',
      Key: {
        patient_id: patientId
      },
      UpdateExpression: `
        SET #patientName = :name, birthday = :birthday, email = :email,
        tel = :tel, updated_at = :updated_at
      `,
      ConditionExpression: 'attribute_exists(patient_id)',
      ExpressionAttributeValues: {
        ':name': name,
        ':birthday': birthday,
        ':email': email,
        ':tel': tel,
        ':updated_at': timestamp
      },
      ExpressionAttributeNames: {
        '#patientName': 'name'
      }
    }).promise();
  
    return {
      statusCode: 204,
      body: JSON.stringify({ message: 'Paciente atualizado com sucesso.' })
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