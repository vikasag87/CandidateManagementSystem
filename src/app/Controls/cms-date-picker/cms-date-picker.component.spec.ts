import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsDatePickerComponent } from './cms-date-picker.component';

describe('CmsDatePickerComponent', () => {
  let component: CmsDatePickerComponent;
  let fixture: ComponentFixture<CmsDatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmsDatePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
