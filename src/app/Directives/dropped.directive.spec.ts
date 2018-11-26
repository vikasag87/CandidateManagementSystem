import { DroppedDirective } from './dropped.directive';
import { ViewContainerRef } from "@angular/core";

describe('DroppedDirective', () => {
  it('should create an instance', () => {
    let ref:ViewContainerRef;
    const directive = new DroppedDirective(ref);
    expect(directive).toBeTruthy();
  });
});
