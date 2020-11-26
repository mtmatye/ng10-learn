import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styles: [
    `
      .list-group {
        width: 340px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrisisListComponent implements OnInit {
  crises$: Observable<Crisis[]>;
  selectedId: number;
  constructor(readonly crisisServe: CrisisService) {
    this.crises$ = this.crisisServe.getCrises();
  }

  ngOnInit(): void {}

  onSelected(id: number): void {
    this.selectedId = id;
  }
}
