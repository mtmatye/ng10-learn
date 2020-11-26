import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-child',
  templateUrl: './change-child.component.html',
  styles: [
    `
      p {
        background-color: pink;
      }
    `,
  ],
})
export class ChangeChildComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
