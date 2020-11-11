import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.scss']
})
export class SizerComponent implements OnInit {
  @Input() size = 16;

  @Output() sizeChange = new EventEmitter<number>();

  @Output() incr = new EventEmitter<number>();
  @Output() decr = new EventEmitter<number>();

  constructor() {

  }

  ngOnInit(): void {

  }

  inc(): void {
    this.sizeChange.emit(this.size + 1);
  }

  dec(): void{
    this.sizeChange.emit(this.size - 1 );
  }

}
