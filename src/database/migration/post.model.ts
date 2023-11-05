//post.model.ts

import { CreateTableInput } from '@aws-sdk/client-dynamodb';


const postsDataStruct : CreateTableInput = {
    TableName: 'Test',
    KeySchema: [
        { AttributeName: 'PK', KeyType: 'HASH' },
        { AttributeName: 'SK', KeyType: 'RANGE' }
    ],
    AttributeDefinitions: [
        { AttributeName: 'PK', AttributeType: 'S' },
        { AttributeName: 'SK', AttributeType: 'S' },
    ],
    ProvisionedThroughput:{
        ReadCapacityUnits: 2,
        WriteCapacityUnits: 2,
    }
};

export default postsDataStruct;
