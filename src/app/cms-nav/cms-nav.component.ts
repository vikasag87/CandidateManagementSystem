import { Component } from '@angular/core';
//import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SessionStorageService } from "angular-web-storage";

@Component({
  selector: 'app-cms-nav',
  templateUrl: './cms-nav.component.html',
  styleUrls: ['./cms-nav.component.css'],
})
export class CMSNavComponent {

  // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  //   .pipe(
  //     map(result => result.matches)
  //   );
    
  constructor(public session: SessionStorageService) {
    //debugger;
    //let abc = this.session;
  }
  
  }
