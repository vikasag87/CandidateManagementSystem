import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { CandidateComponent } from './candidate/candidate.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { CMSNavComponent } from './cms-nav/cms-nav.component';
import { UserListComponent } from './user-list/user-list.component';
import { V1DesignerComponent } from "./v1-designer/v1-designer.component";
import { TestDragAndDropComponent } from "./test-drag-and-drop/test-drag-and-drop.component";

const appRoutes: Routes = [
  { path: 'dragAndDrop', component: TestDragAndDropComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: UserRegisterComponent },
  { path: 'cmsnav', component: CMSNavComponent,
    children:[
      { path: 'candidate', component: CandidateComponent },
      { path: 'userlist', component: UserListComponent},
    ]},
    { path: 'v1designer', component: V1DesignerComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ 
    RouterModule.forRoot(appRoutes) ]
})
export class AppRoutingModule { }
