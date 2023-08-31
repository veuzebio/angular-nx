import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RacesResponse } from 'modules/shared/models';
import { Observable, map } from 'rxjs';

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
}
