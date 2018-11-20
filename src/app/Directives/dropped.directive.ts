import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dropped-host]'
})
export class DroppedDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
