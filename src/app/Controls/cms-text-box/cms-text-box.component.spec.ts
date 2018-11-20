import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsTextBoxComponent } from './cms-text-box.component';

describe('CmsTextBoxComponent', () => {
  let component: CmsTextBoxComponent;
  let fixture: ComponentFixture<CmsTextBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmsTextBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsTextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
