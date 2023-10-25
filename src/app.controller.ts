import { Controller, Get, SetMetadata, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AaaGuard } from './aaa.guard';
import { Aaa } from './aaa.decorator';
import { Bbb } from './bbb.decorator';
import { MyHeaders } from './getHeaders.decorator';
import { MyQuery } from './myQuery.decorator';
// import { AaaException } from './AaaException';

@Controller('/app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Aaa('admin2')
  @SetMetadata('bbb', 'test')
  @UseGuards(AaaGuard)
  getHello(): string {
    return this.appService.getHello();
  }
  @Bbb('/b', 'admin')
  getMergeD(@MyHeaders('Host') Host, @MyQuery('name') name) {
    console.log('Host', Host);
    return name;
  }
}
