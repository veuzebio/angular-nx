import { LogLevel } from './../../../../models/src/lib/models/log-level';
import { InjectionToken } from '@angular/core';

export const LOG_CONFIG = new InjectionToken<{
  level: LogLevel;
  scope: string;
}>('Log Level for Scope', {
  providedIn: 'root',
  factory: () => ({ level: 'all', scope: 'root' }),
});
