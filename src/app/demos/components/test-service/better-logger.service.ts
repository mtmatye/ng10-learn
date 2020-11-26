import { Injectable } from '@angular/core';

@Injectable()
export class BetterLoggerService {
  constructor() {}

  log(msg?: string): void {
    console.log('logger:', msg);
  }
}
