import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.scss']
})
export class IfComponent implements OnInit {

  showIf = false;
  showBlock = false;

  constructor() { }

  ngOnInit(): void {
  }

}
