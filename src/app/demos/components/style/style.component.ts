import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styles: [
    `
      :host {
        border: 4px solid #ccc;
      }
      :host(.active) {
        border-right: 4px solid skyblue;
      }

      p {
        color: red;
        font-size: 20px;
        background-color: aqua;
      }

      :host-context(.theme-light) .title {
        background-color: red;
      }
    `,
  ],
})
export class StyleComponent implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    console.log('el', this.el);
  }
}
