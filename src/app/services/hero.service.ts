import { Injectable } from '@angular/core';
import { Heros1 } from '../configs/hero';
import { Hero } from '../configs/types';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}

  getHeros(): Hero[] {
    return Heros1;
  }
}
