import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { PanelComponent } from './panel/panel.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styles: [],
})
export class ViewChildComponent implements OnInit, AfterViewInit {
  // @ViewChild('box') private boxel: ElementRef;
  @ViewChild('box', { static: true }) private boxel: ElementRef;
  @ViewChildren('box') private boxels: QueryList<ElementRef>;
  @ViewChild(PanelComponent, { static: true })
  private panelInstance: PanelComponent;
  @ViewChild('panel', { read: PanelComponent }) private panel: PanelComponent;
  @ViewChildren(PanelComponent)
  private panelInstances: QueryList<PanelComponent>;
  constructor() {
    // console.log(this.boxel);
  }
  ngAfterViewInit(): void {
    console.log(this.boxel);
    console.log(this.panelInstance);
    console.log(this.panel.el.nativeElement);
    console.log('boxels', this.boxels);
    console.log('panelInstances', this.panelInstances);
  }

  ngOnInit(): void {
    // console.log(this.boxel);
  }
}
