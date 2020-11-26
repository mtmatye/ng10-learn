import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HeroArg, Hero } from '../../../configs/types';
import { Heros1 as Heros } from '../../../configs/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // providers: [HeroService],
})
export class HerosComponent implements OnInit {
  searchParams: HeroArg = {
    name: '',
    job: '',
    sort: 'desc',
  };
  showSpin = false;
  heros: Hero[];
  // heros: Hero[] = [];
  // heroServe: HeroService;

  constructor(readonly heroServe: HeroService) {
    // this.heroServe = new HeroService();
    this.heros = this.heroServe.getHeros();
  }

  ngOnInit(): void {}

  search(): void {
    console.log(this.searchParams);
  }
}
