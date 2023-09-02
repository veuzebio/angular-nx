import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  prefix = 'root';

  log(message: string) {
    console.log(`[${this.prefix}][LOG]: ${message}`);
  }
}
