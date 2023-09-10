import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { RacesResponse, RaceDetailResponse } from '../../models';
import { AppEnvironment } from 'modules/shared/models';

@Injectable({ providedIn: 'root' })
export class RaceService {
  private env = inject(AppEnvironment);

  constructor(private http: HttpClient) {}

  getAllRaces(): Observable<string[]> {
    return this.http
      .get<RacesResponse>(`${this.env.dnd5ApiBasePath}/races/`)
      .pipe(map((response) => response.results.map((result) => result.index)));
  }

  getRaceDetails(race: string): Observable<RaceDetailResponse> {
    return this.http.get<RaceDetailResponse>(
      `${this.env.dnd5ApiBasePath}/races/${race}`
    );
  }
}
