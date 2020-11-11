import { Component, OnInit } from '@angular/core';
import { HeroArg, Hero } from '../../configs/types';
import { Heros1 as Heros } from '../../configs/hero';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss'],
})
export class HerosComponent implements OnInit {
  searchParams: HeroArg = {
    name: '',
    job: '',
    sort: 'desc',
  };
  showSpin = false;
  heros: Hero[] = Heros;
  // heros: Hero[] = [];

  constructor() {}

  ngOnInit(): void {}

  search(): void {
    console.log(this.searchParams);
  }
}
