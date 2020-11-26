import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Injectable,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { fromEvent, Observable, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  pluck,
  switchMap,
} from 'rxjs/operators';
@Injectable()
export class WikiService {
  readonly url =
    'https://zh.wikipedia.org/w/api.php?action=opensearch&format=json&limit=5&origin=*&search=';

  list(keyword: string): Observable<string[]> {
    return ajax.getJSON(this.url + keyword).pipe(map((item) => item[1]));
  }
}

@Component({
  selector: 'app-test-rx',
  templateUrl: './test-rx.component.html',
  styleUrls: ['./test-rx.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [WikiService],
})
export class TestRxComponent implements OnInit, AfterViewInit {
  list = [];
  list$:Observable<string[]>;
  @ViewChild('input', { static: true }) private inputEl: ElementRef;
  constructor(private wikiServe: WikiService, private cdr: ChangeDetectorRef) {
    this.list$ = this.wikiServe.list('p')
  }

  ngAfterViewInit(): void {
    fromEvent(this.inputEl.nativeElement, 'input')
      .pipe(
        debounceTime(500),
        pluck('target', 'value'),
        distinctUntilChanged(),
        switchMap((keyword: string) => {
          return keyword.length ? this.wikiServe.list(keyword) : of([]);
        })
      )
      .subscribe((list) => {
        this.list = list;
        this.cdr.markForCheck();
      });
  }

  ngOnInit(): void {}
}
