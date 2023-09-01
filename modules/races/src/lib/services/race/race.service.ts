import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, map, tap, of, switchMap, iif, filter } from 'rxjs';
import { RacesResponse, RaceDetailResponse } from '../../models';
import { AppEnvironment, ENV } from 'modules/shared/models';

@Injectable()
export class RaceService {
  private cache: {
    [key: string]: any;
  } = {};

  constructor(
    private http: HttpClient,
    @Inject(ENV) private env: AppEnvironment
  ) {}

  getAllRaces(): Observable<string[]> {
    return this.getValueFromCache<string[]>('races').pipe(
      switchMap((cached) =>
        iif(() => Boolean(cached), of(cached), this.getAllRacesFromServer())
      )
    );
  }

  getRaceDetails(race: string): Observable<RaceDetailResponse> {
    return this.getValueFromCache<RaceDetailResponse>(race).pipe(
      switchMap((cached) =>
        iif(() => Boolean(cached), of(cached), this.getDetailsFromServer(race))
      )
    );
  }

  private getValueFromCache<T>(key: string): Observable<T> {
    return of(this.cache).pipe(map((cache) => cache[key]));
  }

  private setValueOnCache<T>(
    key: string
  ): (source$: Observable<T>) => Observable<T> {
    return (source$) =>
      source$.pipe(
        filter((value) => !!value),
        tap((value) => (this.cache[key] = value)),
        tap(() => console.log(`Entry [${key}] added to RaceService cache`))
      );
  }

  private getAllRacesFromServer(): Observable<string[]> {
    return this.http
      .get<RacesResponse>(`${this.env.dnd5ApiBasePath}/races/`)
      .pipe(
        map((response) => response.results.map((result) => result.name)),
        this.setValueOnCache('races')
      );
  }

  private getDetailsFromServer(race: string) {
    return this.http
      .get<RaceDetailResponse>(`${this.env.dnd5ApiBasePath}/races/${race}`)
      .pipe(this.setValueOnCache(race));
  }
}
