import { Component, Input, OnInit } from '@angular/core';
import { Race } from 'modules/shared/models';
import { Observable } from 'rxjs';
import { RaceService } from '../../services/race/race.service';

@Component({
  selector: 'lib-race-detail',
  templateUrl: './race-detail.component.html',
})
export class RaceDetailComponent {
  detail$!: Observable<Race>;

  @Input() set name(param: string) {
    this.detail$ = this.raceService.getRaceDetails(param);
  }

  constructor(private raceService: RaceService) {}
}
