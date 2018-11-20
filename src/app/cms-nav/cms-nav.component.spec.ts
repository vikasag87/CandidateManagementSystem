
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CMSNavComponent } from './cms-nav.component';

describe('CMSNavComponent', () => {
  let component: CMSNavComponent;
  let fixture: ComponentFixture<CMSNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [CMSNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CMSNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
