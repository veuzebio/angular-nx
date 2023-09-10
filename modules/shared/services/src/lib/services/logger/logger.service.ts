import { Injectable, inject } from '@angular/core';
import { LOG_CONFIG } from '../../tokens/log-level.token';

@Injectable({ providedIn: 'root' })
export class LoggerService {
  private logConfig = inject(LOG_CONFIG);

  constructor() {
    const { level, scope } = this.logConfig;

    if (level === undefined) {
      console.log(
        `This LoggerService instance for the scope (${scope}) has no Log Level defined...`
      );
      return;
    }

    console.log(
      `The Log Level is set to (${level.toUpperCase()}) for the scope (${scope})`
    );
  }

  log(message: string): void {
    if (this.shouldPrint(['log', 'all'])) {
      console.log(`[${this.logConfig.scope}][LOG]: ${message}`);
    }
  }

  error(message: string): void {
    if (this.shouldPrint(['error', 'all'])) {
      console.error(`[${this.logConfig.scope}][ERROR]: ${message}`);
    }
  }

  private shouldPrint(allowed: string[]): boolean {
    return allowed.some((a) => a === this.logConfig.level);
  }
}
