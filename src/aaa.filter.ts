import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { AaaException } from './AaaException';
// import { Response } from 'express';

@Catch(AaaException)
export class AaaFilter implements ExceptionFilter {
  catch(exception: AaaException, host: ArgumentsHost) {
    if (host.getType() === 'http') {
      console.log('is catch');
      // const ctx = host.switchToHttp();
      // const response = ctx.getResponse<Response>();
      // const request = ctx.getRequest<Request>();
      // response.status(500).json({
      //   aaa: exception.aaa,
      //   bbb: exception.bbb,
      // });
    } else if (host.getType() === 'ws') {
    } else if (host.getType() === 'rpc') {
    }
  }
}
