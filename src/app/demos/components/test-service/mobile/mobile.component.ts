import { Component, OnInit, Optional, SkipSelf } from '@angular/core';
import { Mobile, MobileService } from './mobile.service';

@Component({
  selector: 'app-mobile',
  template: `
    <p>mobile works!</p>
    <div class="mobile">
      <app-mobile-list [lists]="mobiles"></app-mobile-list>
    </div>
  `,
  styles: [],
  providers: [MobileService],
})
export class MobileComponent implements OnInit {
  mobiles: Mobile[];
  constructor(@Optional() @SkipSelf() private mobileServe: MobileService) {
    this.mobiles = this.mobileServe.getMobiles();
  }

  ngOnInit(): void {}
}
