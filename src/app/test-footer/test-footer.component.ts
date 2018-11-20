import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, Attribute, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-test-footer',
  templateUrl: './test-footer.component.html',
  styleUrls: ['./test-footer.component.css']//,
  //encapsulation: ViewEncapsulation.
})
export class TestFooterComponent implements OnChanges, DoCheck {

  constructor(@Attribute('TestInput') private TestInput:string) { }

  @Input()
  InputVariable: string;
  

  ngOnInit() {
    // setInterval(() => {
    //   alert(this.TestInput);
    // }, 5000);
  }

  ngOnChanges(changes: SimpleChanges){
    
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
    }
  }

  ngDoCheck()
  {
    //debugger;
  }

}
