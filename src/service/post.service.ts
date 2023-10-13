import {Injectable} from "@nestjs/common";
import {CreateTableCommand, CreateTableOutput} from "@aws-sdk/client-dynamodb";
import postsDataStruct from "../database/migration/post.model";
import {DynamoDBDocumentClient} from "@aws-sdk/lib-dynamodb";
import dbClient from "../database/db.client";

@Injectable()
export class PostService {


    async createTable(): Promise<CreateTableOutput> {
        const command =  new CreateTableCommand(postsDataStruct);

            let cli = await DynamoDBDocumentClient.from(dbClient).send(command);
            console.log(cli.TableDescription);
            return cli;


    }

}

