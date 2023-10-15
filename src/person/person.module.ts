import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { UserService } from '../user/user.service';

@Module({
  controllers: [PersonController],
  providers: [PersonService, UserService],
})
export class PersonModule {}
