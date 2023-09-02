import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap, of, switchMap, iif, filter } from 'rxjs';
import { RacesResponse, RaceDetailResponse } from '../../models';
import { AppEnvironment } from 'modules/shared/models';
import { CacheService } from 'modules/shared/services';

@Injectable()
export class RaceService {
  constructor(
    private http: HttpClient,
    private env: AppEnvironment,
    private cache: CacheService
  ) {
    cache.name = RaceService.name;
  }

  getAllRaces(): Observable<string[]> {
    const cached = this.cache.get<string[]>('races');

    return cached ? of(cached) : this.getAllRacesFromServer();
  }

  getRaceDetails(race: string): Observable<RaceDetailResponse> {
    const cached = this.cache.get<RaceDetailResponse>(race);

    return cached ? of(cached) : this.getDetailsFromServer(race);
  }

  private cacheResponse<T>(
    key: string
  ): (source$: Observable<T>) => Observable<T> {
    return (source$) =>
      source$.pipe(
        filter((value) => !!value),
        tap((value) => this.cache.set<T>(key, value))
      );
  }

  private getAllRacesFromServer(): Observable<string[]> {
    return this.http
      .get<RacesResponse>(`${this.env.dnd5ApiBasePath}/races/`)
      .pipe(
        map((response) => response.results.map((result) => result.name)),
        this.cacheResponse('races')
      );
  }

  private getDetailsFromServer(race: string) {
    return this.http
      .get<RaceDetailResponse>(`${this.env.dnd5ApiBasePath}/races/${race}`)
      .pipe(this.cacheResponse(race));
  }
}
