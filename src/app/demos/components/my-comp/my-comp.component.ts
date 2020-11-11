import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-comp',
  template: ` <p>my-comp works!</p> `,
  styles: [
    `
      p {
        color: pink;
      }
    `,
  ],
})
export class MyCompComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
