import { Component, Inject, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-flower',
  template: ` <p appHighlight="pink">flower works!</p> `,
  styles: [],
})
export class FlowerComponent implements OnInit {
  constructor(
    private logService: LoggerService,
    @Inject('httpApi') readonly httpApi: string
  ) {}

  ngOnInit(): void {
    this.logService.log(this.httpApi);
  }
}
