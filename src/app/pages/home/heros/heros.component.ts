import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
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
  // heros: Hero[];
  heros: Hero[] = [];
  // heroServe: HeroService;

  constructor(readonly heroServe: HeroService, private cdr: ChangeDetectorRef) {
    // this.heroServe = new HeroService();
    // this.heros = this.heroServe.heroes();
  }

  ngOnInit(): void {
    this.getList();
  }

  search(): void {
    console.log(this.searchParams);
    this.getList();
  }

  reset(): void {
    this.searchParams = {
      name: '',
      job: '',
      sort: 'desc',
    };
    this.getList();
  }

  getList(): void {
    this.showSpin = true;
    this.heroServe.heroes(this.searchParams).subscribe(
      (heroes) => {
        this.heros = heroes;
        this.showSpin = false;
        this.cdr.markForCheck();
      },
      (error) => {
        console.log('🚀 ~ error', error);
      }
    );
  }
}
