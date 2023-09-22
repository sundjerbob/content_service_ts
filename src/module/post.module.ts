// post.module.ts
import { Module } from '@nestjs/common';
import dbClient from '../database/db.client';
import {PostService} from "../service/post.service";
import {PostController} from "../controller/post.controller";

@Module({
    imports: [], // Include the DatabaseModule in imports
    controllers: [PostController], // Your controllers
    providers: [PostService], // Your other providers
})
export class PostModule {}
