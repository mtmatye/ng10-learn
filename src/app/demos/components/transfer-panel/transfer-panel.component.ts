import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { TransferItem } from './types';

@Component({
  selector: 'app-transfer-panel',
  templateUrl: './transfer-panel.component.html',
  styleUrls: ['./transfer-panel.component.scss'],
})
export class TransferPanelComponent implements OnInit, OnChanges {
  @Input() list: TransferItem[] = [];
  @Input() search = false;
  showList: TransferItem[] = [];
  selecteds: TransferItem[] = [];
  @Output() changed = new EventEmitter<TransferItem[]>();

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    const { list, search } = changes;
    if (list) {
      this.showList = list.currentValue.slice();
      this.selecteds = this.list.filter((item) => item.checked);
    }
    if (search && search.currentValue === false) {
      this.showList = this.list.slice();
    }
  }

  itemClick(target: TransferItem): void {
    const index = this.getTargetIndex(target.key);
    if (index > -1) {
      this.selecteds.splice(index, 1);
    } else {
      this.selecteds.push(target);
    }

    this.changed.emit(this.selecteds);
  }

  getTargetIndex(key: string): number {
    return this.selecteds.findIndex((item) => item.key === key);
  }

  onInput(e: Event): void {
    const val = (e.target as HTMLInputElement).value;
    if (val.trim()) {
      this.showList = this.list.filter((item) => item.value.includes(val));
      // this.showList = this.list.filter(item => item.value.indexOf(val) > -1);
    } else {
      this.showList = this.list.slice();
    }
  }

  trackByItem(): void {}
}
