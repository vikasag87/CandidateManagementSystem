import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V1DesignerComponent } from './v1-designer.component';

describe('V1DesignerComponent', () => {
  let component: V1DesignerComponent;
  let fixture: ComponentFixture<V1DesignerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V1DesignerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V1DesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
