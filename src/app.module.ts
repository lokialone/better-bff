import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [PersonModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
