import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://rafakiss7:hMWWXxmhMQyMcNTN@cluster0.9aura0q.mongodb.net/test'),
    UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}