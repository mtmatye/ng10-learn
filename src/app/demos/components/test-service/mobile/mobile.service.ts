import { Injectable } from '@angular/core';

export interface Mobile {
  id: string;
  name: string;
}

@Injectable()
export class MobileService {
  private mobiles: Mobile[] = [
    { id: '111', name: 'aaa' },
    { id: '222', name: 'bbb' },
    { id: '333', name: 'ccc' },
  ];
  constructor() {}

  getMobiles(): Mobile[] {
    return this.mobiles;
  }
}
