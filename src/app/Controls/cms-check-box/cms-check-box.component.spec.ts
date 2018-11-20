import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsCheckBoxComponent } from './cms-check-box.component';

describe('CmsCheckBoxComponent', () => {
  let component: CmsCheckBoxComponent;
  let fixture: ComponentFixture<CmsCheckBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmsCheckBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsCheckBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
