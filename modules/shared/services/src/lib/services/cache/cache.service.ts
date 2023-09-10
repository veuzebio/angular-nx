import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { TimedCache } from '../../models/timed-cache';
import { LoggerService } from '../logger/logger.service';

@Injectable({ providedIn: 'root' })
export class CacheService {
  name = 'root';
  private cache = new Map<string, TimedCache>();

  constructor(private logger: LoggerService) {}

  set<T>(
    key: string,
    data: T,
    config: { cacheMinutes: number } = { cacheMinutes: 15 }
  ): void {
    const { cacheMinutes } = config;
    const expireDate = new Date();

    expireDate.setMinutes(expireDate.getMinutes() + cacheMinutes);

    this.cache.set(key, { expireDate, data });

    this.logger.log(
      `Entry '${key}' added to '${this.name}' cache (expires at: ${formatDate(
        expireDate,
        'shortTime',
        'en-US'
      )})`
    );
  }

  get<T>(key: string): T | undefined {
    if (!this.cache.has(key)) {
      this.logger.log(`'${key}' not found on '${this.name}' cache`);

      return;
    }

    const cached = this.cache.get(key) as TimedCache;

    if (cached.expireDate < new Date()) {
      this.cache.delete(key);

      this.logger.log(`'${key}' data expired on '${this.name}' cache`);
      this.logger.log(`Deleting '${key}' from '${this.name}' cache`);

      return;
    }

    return cached.data;
  }
}
