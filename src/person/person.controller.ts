import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Inject,
} from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { UserService } from '../user/user.service';

@Controller('api/person')
export class PersonController {
  @Inject(UserService)
  private readonly userService: UserService;
  constructor(private readonly personService: PersonService) {}

  @Post()
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.personService.create(createPersonDto);
  }
  @Get()
  findAll() {
    return this.personService.findAll();
  }
  @Get('find')
  query(@Query('name') name: string, @Query('age') age: number) {
    const id = age;
    console.log('name', name);
    return this.userService.findOne(id);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return id;
    // return this.personService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto) {
    return this.personService.update(+id, updatePersonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personService.remove(+id);
  }
}
