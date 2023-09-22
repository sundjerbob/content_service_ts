// app.module.ts
import { Module } from '@nestjs/common';
import { DatabaseModule } from './module/db.module';
import {PostModule} from "./module/post.module";

@Module({
  imports: [DatabaseModule, PostModule], // Include the DatabaseModule in imports
  controllers: [], // Your controllers
  providers: [], // Your other providers
})
export class AppModule {}
