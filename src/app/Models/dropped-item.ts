import { Type } from '@angular/core';
import { Subject } from '../../../node_modules/rxjs';

export class DroppedItem {
    constructor(public component: Type<any>, public data: any) {}
  }

  export interface DroppedComponent {
    data: any;
    _ref: any;
    removedfield: Subject<any>;
  }