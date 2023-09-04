import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { RacesResponse, RaceDetailResponse } from '../../models';
import { AppEnvironment } from 'modules/shared/models';

@Injectable({ providedIn: 'root' })
export class RaceService {
  constructor(private http: HttpClient, private env: AppEnvironment) {}

  getAllRaces(): Observable<string[]> {
    return this.http
      .get<RacesResponse>(`${this.env.dnd5ApiBasePath}/races/`)
      .pipe(map((response) => response.results.map((result) => result.name)));
  }

  getRaceDetails(race: string): Observable<RaceDetailResponse> {
    return this.http.get<RaceDetailResponse>(
      `${this.env.dnd5ApiBasePath}/races/${race}`
    );
  }
}
