import { MyDirectiveDirective } from './my-directive.directive';
import { ElementRef } from "@angular/core";

describe('MyDirectiveDirective', () => {
  it('should create an instance', () => {
    var el:ElementRef;
    const directive = new MyDirectiveDirective(el);
    expect(directive).toBeTruthy();
  });
});
