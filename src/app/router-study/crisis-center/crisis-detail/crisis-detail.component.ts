import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrisisDetailComponent implements OnInit {
  crisis$: Observable<Crisis>;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private crisisServe: CrisisService
  ) {}
  ngOnInit(): void {
    // this.crisis$ = this.route.data.subscribe();
    // this.crisis$ = this.route.data.subscribe((crisis) => of(crisis));
    this.crisis$ = this.route.paramMap.pipe(
      switchMap((params) => {
        return this.crisisServe.getCrisis(params.get('id'));
      })
    );
  }
}
