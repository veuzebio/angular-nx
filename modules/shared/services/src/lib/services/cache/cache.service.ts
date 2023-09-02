import { Injectable } from '@angular/core';
import { LoggerService } from '..';

@Injectable()
export class CacheService {
  name = 'root';
  private cache = new Map();

  constructor(private logger: LoggerService) {
    logger.prefix = 'Cache';
  }

  set<T>(key: string, value: T): void {
    this.cache.set(key, value);
    this.logger.log(`Entry '${key}' added to '${this.name}' cache`);
  }

  get<T>(key: string): T {
    if (!this.cache.has(key)) {
      this.logger.log(`'${key}' not found on '${this.name}' cache`);
    }

    return this.cache.get(key);
  }
}
