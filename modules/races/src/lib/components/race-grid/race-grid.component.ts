import { Component, OnInit } from '@angular/core';
import { RaceService } from '../../services/race/race.service';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './race-grid.component.html',
})
export class RaceGridComponent {
  races$!: Observable<string[]>;

  constructor(private raceService: RaceService) {}

  ngOnInit(): void {
    this.races$ = this.raceService.getAllRaces();
  }
}
