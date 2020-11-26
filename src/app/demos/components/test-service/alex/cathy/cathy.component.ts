import { Component, OnInit } from '@angular/core';
import { AlexComponent } from '../alex.component';

@Component({
  selector: 'app-cathy',
  template: ` <p>cathy works!</p> `,
  styles: [],
})
export class CathyComponent implements OnInit {
  constructor(public alex: AlexComponent) {}

  ngOnInit(): void {}
}
