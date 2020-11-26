import { Component, OnInit } from '@angular/core';

export abstract class Base {
  name: string;
}

@Component({
  selector: 'app-alex',
  template: `
    <p>alex works!</p>
    <h3>{{ name }}</h3>
    <app-carol></app-carol>
    <app-cathy></app-cathy>
    <app-craig></app-craig>
  `,
  styles: [],
})
export class AlexComponent extends Base implements OnInit {
  name = 'ALEX';
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
