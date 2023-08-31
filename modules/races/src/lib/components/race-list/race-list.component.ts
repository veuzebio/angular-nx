import { Component, OnInit } from '@angular/core';
import { RaceService } from '../../services/race/race.service';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './race-list.component.html',
  styleUrls: ['./race-list.component.scss'],
})
export class RaceListComponent implements OnInit {
  races$!: Observable<string[]>;

  constructor(private raceService: RaceService) {}

  ngOnInit(): void {
    this.races$ = this.raceService.getAllRaces();
  }
}
