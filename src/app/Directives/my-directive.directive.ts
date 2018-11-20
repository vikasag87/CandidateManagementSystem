import { Directive, ElementRef, HostListener, HostBinding, Output, EventEmitter } from '@angular/core';
import { AlertService } from '../services/alert.service';
//import { EventEmitter } from 'events';

@Directive({
  selector: '[bgColorChanger]',
  providers: [AlertService]
})
export class MyDirectiveDirective {

  constructor(private el:ElementRef) { }

  @HostBinding('style.backgroundColor') bgColor: string;

  @HostListener('mouseover') onMouseOver(){
    //this.el.nativeElement.style.backgroundColor = 'Red';
    this.bgColor = 'Red';
    this.myOutput.emit('Data passed from directive');
  }

  // @HostListener('click') onClick(){
    
  // }

  @Output() myOutput = new EventEmitter<any>();
}
