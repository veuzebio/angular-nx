import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { RacesResponse, RaceDetailResponse } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class RaceService {
  constructor(private http: HttpClient) {}

  getAllRaces(): Observable<string[]> {
    return this.http
      .get<RacesResponse>(`https://www.dnd5eapi.co/api/races/`)
      .pipe(map((response) => response.results.map((result) => result.name)));
  }

  getRaceDetail(race: string) {
    return this.http
      .get<RaceDetailResponse>(`https://www.dnd5eapi.co/api/races/${race}`)
      .pipe();
  }
}
