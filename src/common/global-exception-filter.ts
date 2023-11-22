import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  //   Inject,
} from '@nestjs/common';
import { Response } from 'express';
// import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
// import { Logger } from 'winston';
import { ResponseHandler } from './response-handler';
import { error } from 'console';

/**
 * Global Exception Filter
 */
@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  /**
   * Description - Global Exception Filter Dependencies
   * @param logger
   */
  //   constructor(@Inject(WINSTON_MODULE_PROVIDER) private logger: Logger) {}

  /**
   * Description - Catch Exception And Return Common Error Response
   * @param exception
   * @param host
   * @returns
   */
  catch(exception: Error, host: ArgumentsHost): Response {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    console.log(
      error(
        `Error: method: ${request.method} - url :${request.url}`,
        exception.stack,
        exception.name,
        GlobalExceptionFilter.name,
      ),
    );

    if (exception instanceof HttpException) {
      const statusCode = exception.getStatus();
      return response
        .status(statusCode)
        .json(
          ResponseHandler.error(exception.name, exception.message, statusCode),
        );
    }

    return response
      .status(HttpStatus.BAD_REQUEST)
      .json(
        ResponseHandler.error(
          exception.name,
          exception.message,
          HttpStatus.BAD_REQUEST,
        ),
      );
  }
}
