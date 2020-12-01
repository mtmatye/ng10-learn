import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stringify } from 'qs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Heros1 } from '../configs/hero';
import { Hero } from '../configs/types';
import { Base, HeroArg } from '../types';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private prefix = environment.baseUrl + '/hero/';
  constructor(private http: HttpClient) {}

  heroes(args: HeroArg): Observable<Hero[]> {
    // const params = new HttpParams()
    //   .set('name', args.name)
    //   .set('job', args.job)
    //   .set('sort', args.sort);
    const params = new HttpParams({
      fromString: stringify(args),
    });
    return this.http
      .get(this.prefix + 'list', { params })
      .pipe(map((res: Base<Hero[]>) => res.data));
  }
}
