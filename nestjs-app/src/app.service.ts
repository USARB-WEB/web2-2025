import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  get(): string {
    return 'GET endpoint is working!';
  }

  get123(): string {
    return 'GET 123 endpoint is working!';
  }

  get456(): string {
    return 'GET 456 endpoint is working!';
  }
}
