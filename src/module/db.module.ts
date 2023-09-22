// database.module.ts
import { Module } from '@nestjs/common';
import dbClient from '../database/db.client';
import {PostService} from "../service/post.service";

@Module({

    providers: [
        PostService,
        {
            provide: 'DynamoDBClient', // Provide a token to identify this dependency
            useValue: dbClient, // The DynamoDB Document Client instance
        },
    ],
    exports: ['DynamoDBClient'], // Export the DynamoDB Client for use in other modules
})
export class DatabaseModule {}
