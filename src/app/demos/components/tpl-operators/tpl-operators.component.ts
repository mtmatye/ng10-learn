import { Component, OnInit } from '@angular/core';
import {Hero} from '../../../configs/hero';

@Component({
  selector: 'app-tpl-operators',
  templateUrl: './tpl-operators.component.html',
  styles: [
  ]
})
export class TplOperatorsComponent implements OnInit {
  title = 'Test';

  obj = {
    id : 0,
    name: 'mtm'
  };

  now = new Date().getTime();

  hero: Hero;
  constructor() {
    setTimeout(() => {
      this.hero = {
        id: '001',
        name: '卡特'
      };
    }, 1000);
  }

  ngOnInit(): void {
  }

}
