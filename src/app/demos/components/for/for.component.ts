import { Component, OnInit } from '@angular/core';
import Heros, { Hero } from '../../../configs/hero';

@Component({
  // tslint:disable-next-line: component-selector
  selector: '[app-fo r]',
  templateUrl: './for.component.html',
  styles: [
    `
      .even {
        color: #82fa54;
      }

      .odd {
        color: #698efa;
      }
    `,
  ],
})
export class ForComponent implements OnInit {
  heros: Hero[] = Heros;

  str = '';

  constructor() {}

  ngOnInit(): void {}

  add(): void {
    this.heros.push({ id: 'hero_' + this.heros.length, name: this.str });
    this.str = '';
  }

  reset(): void {
    this.heros = [
      {
        id: 'hero_4',
        name: '盖伦4',
      },
      {
        id: 'hero_5',
        name: '赵信5',
      },
      {
        id: 'hero_2',
        name: '嘉文',
      },
      {
        id: 'hero_6',
        name: '易大师6',
      },
      {
        id: 'hero_7',
        name: '泰达米尔7',
      },
    ];
  }

  trackByHero(hero: Hero): string {
    return hero.id;
  }
}
