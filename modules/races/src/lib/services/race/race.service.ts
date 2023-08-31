import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RaceService {
  constructor(private http: HttpClient) {}

  getAllRaces() {
    this.http.get(`https://www.dnd5eapi.co/api/races/`);
  }
}
