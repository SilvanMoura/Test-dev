import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserEntity } from './user';
import { UserModel } from './user.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '',
    database: 'register',
    entities: [UserEntity],
    synchronize: true,
  }), UserModel],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
