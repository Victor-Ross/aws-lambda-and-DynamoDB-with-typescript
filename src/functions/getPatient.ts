import { APIGatewayProxyHandler } from "aws-lambda";


type IPatientPatameters = {
  patientId: string;
}

const patients = [{
  id: '1',
  name: 'Victor Ross'
},
{
  id: '2',
  name: 'Renan Lopes'
},
{
  id: '3',
  name: 'Marcos Vinicius'
}]

export const handle:APIGatewayProxyHandler = async (event) => {
  
  const { patientId } = event.pathParameters as IPatientPatameters;

  const patient = patients.find(patient => patient.id === patientId);
  console.log(patients);
  
  return {
    statusCode: 200,
    body: JSON.stringify(patient),
    headers: {
      "Content-Type": "application/json"
    }
  }
}