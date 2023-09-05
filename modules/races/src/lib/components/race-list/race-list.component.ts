import { Component, HostBinding, OnInit } from '@angular/core';
import { RaceService } from '../../services/race/race.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-race-list',
  templateUrl: './race-list.component.html',
})
export class RaceListComponent implements OnInit {
  @HostBinding('class') hostClassAttr = 'h-full w-full flex';

  races$!: Observable<string[]>;

  constructor(private raceService: RaceService) {}

  ngOnInit(): void {
    this.races$ = this.raceService.getAllRaces();
  }
}
