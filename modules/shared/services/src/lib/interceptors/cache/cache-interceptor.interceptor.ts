import { CacheService } from './../../services/cache/cache.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, filter, of, tap } from 'rxjs';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  constructor(private cache: CacheService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.method !== 'GET') {
      return next.handle(request);
    }

    const cached = this.cache.get<HttpResponse<any>>(request.urlWithParams);

    return cached
      ? of(cached)
      : next.handle(request).pipe(
          filter((event) => event instanceof HttpResponse),
          tap((response) => this.cache.set(request.urlWithParams, response))
        );
  }
}
