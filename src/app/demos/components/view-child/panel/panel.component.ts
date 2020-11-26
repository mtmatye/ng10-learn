import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styles: [],
})
export class PanelComponent implements OnInit {
  readonly name = 'maturi';
  constructor(readonly el: ElementRef) {}

  ngOnInit(): void {}
}
