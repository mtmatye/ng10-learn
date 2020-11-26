import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import { Direction, TransferItem } from './transfer-panel/types';
import deepClone from 'lodash.clonedeep';
@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransferComponent implements OnInit, OnChanges {
  @Input('sourceData') list: TransferItem[];
  @Input() search: boolean;
  @Input() customTpl: TemplateRef<any>;
  leftDatas: TransferItem[] = [];
  rightDatas: TransferItem[] = [];
  leftShowDatas: TransferItem[] = [];
  rightShowDatas: TransferItem[] = [];

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    const { list } = changes;
    if (list) {
      list.currentValue.forEach((item) => {
        if (!item.direction || item.direction === 'left') {
          item.direction = 'left';
          this.leftDatas.push(item);
          this.leftShowDatas.push(item);
        } else {
          item.direction = 'right';
          this.rightDatas.push(item);
          this.rightShowDatas.push(item);
        }
      });
      // this.leftDatas = list.currentValue.filter((item) => {
      //   return item?.direction === 'left';
      // });
      // this.rightDatas = list.currentValue.filter((item) => {
      //   return item?.direction === 'right';
      // });
    }
  }

  ngOnInit(): void {
    // this.leftDatas = this.list.slice();
  }

  disableBtn(direction: Direction): boolean {
    const targetDatas =
      direction === 'right' ? this.leftDatas : this.rightDatas;
    return targetDatas.findIndex((item) => item.checked) === -1;
  }

  onSelect(index: number, direction: Direction): void {
    // if (direction === 'left') {
    //   this.leftDatas[index].checked = !this.leftDatas[index].checked;
    //   this.leftDatas = this.leftDatas.slice();
    // } else {
    //   this.rightDatas[index].checked = !this.rightDatas[index].checked;
    //   this.rightDatas = this.rightDatas.slice();
    // }
    this[direction + 'ShowDatas'][index].checked = !this[
      direction + 'ShowDatas'
    ][index].checked;
    this[direction + 'ShowDatas'] = this[direction + 'ShowDatas'].slice();
  }

  onFilter(str: string, direction: Direction): void {
    this[direction + 'ShowDatas'] = this[direction + 'Datas'].filter((item) => {
      return item.value.includes(str);
    });
  }

  to(direction: Direction): void {
    if (direction === 'left') {
      this.move('right', 'left');
    } else {
      this.move('left', 'right');
    }
  }

  private move(from: Direction, to: Direction): void {
    const tmp: TransferItem[] = deepClone(this[from + 'ShowDatas'])
      .filter((item) => item.checked)
      .map((item) => {
        item.checked = false;
        return item;
      });
    this[to + 'ShowDatas'] = this[to + 'ShowDatas'].concat(tmp);
    this[to + 'Datas'] = this[to + 'Datas'].concat(tmp);
    this[from + 'ShowDatas'] = this[from + 'ShowDatas'].filter(
      (item) => !item.checked
    );
    this[from + 'Datas'] = this[from + 'Datas'].filter((item) => {
      return tmp.findIndex((el) => item.key === el.key) === -1;
    });

    // let tmp: TransferItem[] = this[from].filter((item) => item.checked);
    // this[from] = this[from].filter((item) => !item.checked);

    // tmp = tmp.map((item) => {
    //   item.checked = false;
    //   return item;
    // });
    // this[to] = this[to].concat(tmp);
  }
}
