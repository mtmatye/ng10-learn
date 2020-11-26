import { Component, Input, OnInit } from '@angular/core';
import { Mobile } from '../mobile.service';

@Component({
  selector: 'app-mobile-list',
  template: `
    <p>mobile-list works!</p>
    <div class="mobile-list">
      <app-mobile-item *ngFor="let item of lists"></app-mobile-item>
    </div>
  `,
  styles: [],
})
export class MobileListComponent implements OnInit {
  @Input() lists: Mobile[];
  constructor() {}

  ngOnInit(): void {
    console.log(this.lists);
  }
}
