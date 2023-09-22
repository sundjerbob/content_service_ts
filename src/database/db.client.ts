//db.client.ts
import {DynamoDBClient} from '@aws-sdk/client-dynamodb';
import {DynamoDBDocumentClient} from "@aws-sdk/lib-dynamodb";

const dynamoClient = new DynamoDBClient({
    region:'local',
    endpoint: 'http://localhost:8000'

});

const dbClient = DynamoDBDocumentClient.from(dynamoClient);

export default dbClient;

