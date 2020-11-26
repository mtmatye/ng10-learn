import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes-list.component.html',
  styles: [
    `
      .list-group {
        width: 280px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesListComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  selectedId: number;
  constructor(
    readonly heroServe: HeroService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.heroes$ = this.heroServe.getHeroes();
  }
  ngOnInit(): void {
    this.selectedId = +this.route.snapshot.paramMap.get('id');
    // this.heroes$ = this.route.paramMap.pipe(
    //   switchMap((params) => {
    //     this.selectedId = +params.get('id');
    //     return this.heroServe.getHeroes();
    //   })
    // );
  }

  onSelected(id: number): void {
    this.selectedId = id;
    // this.router.navigateByUrl('/hero/' + id);
    this.router.navigate(['/hero', id]);
  }
}
