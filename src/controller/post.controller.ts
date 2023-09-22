//post.controller.ts

import { Controller, Post } from '@nestjs/common';
import { PostService } from '../service/post.service';

@Controller('/posts')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Post('/create-table')
    async createTable(): Promise<string> {
        try {
            await this.postService.createTable();
            return 'Table created successfully.';
        } catch (error) {
            console.error(error);
            throw new Error('Failed to create table.');
        }
    }
}
