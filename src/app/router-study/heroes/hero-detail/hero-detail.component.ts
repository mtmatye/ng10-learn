import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroDetailComponent implements OnInit {
  hero$: Observable<Hero>;
  constructor(private route: ActivatedRoute, readonly heroServe: HeroService) {}

  ngOnInit(): void {
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params) => {
        return this.heroServe.getHero(params.get('id'));
      })
    );
  }
}
