import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styles: [
    `
      .main {
        background-color: skyblue;
      }
    `,
  ],
})
export class ChangeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
