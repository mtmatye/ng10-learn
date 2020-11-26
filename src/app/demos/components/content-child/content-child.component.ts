import {
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  OnInit,
  QueryList,
} from '@angular/core';
import { ContentPanelComponent } from './panel/panel.component';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styles: [],
})
export class ContentChildComponent implements OnInit, AfterViewInit {
  @ContentChild('list', { static: true }) private listEl: ElementRef;
  @ContentChild(ContentPanelComponent) private panel: ContentPanelComponent;
  @ContentChildren('list') private lists: QueryList<ElementRef>;
  @ContentChildren(ContentPanelComponent, { descendants: true })
  private panels: QueryList<ContentPanelComponent>;
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    console.log('list', this.listEl);
    console.log('panel', this.panel);
    console.log('lists', this.lists);
    console.log('panels', this.panels);
  }
}
