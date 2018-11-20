import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { CandidateComponent } from './candidate/candidate.component';
import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UserRegisterComponent } from './user-register/user-register.component';
import { AlertComponent } from './Shared/alert/alert.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule, MatTableModule } from '@angular/material';
//import { LayoutModule } from '@angular/cdk/layout';
import { CMSNavComponent } from './cms-nav/cms-nav.component';
import { UserListComponent } from './user-list/user-list.component';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { V1DesignerComponent } from './v1-designer/v1-designer.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { MenuModule } from '@progress/kendo-angular-menu';
import { PopupModule } from '@progress/kendo-angular-popup';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { TestDragAndDropComponent } from "./test-drag-and-drop/test-drag-and-drop.component";
import { ResizableModule } from 'angular-resizable-element';
import { CmsTextBoxComponent } from './Controls/cms-text-box/cms-text-box.component';
import { CmsDatePickerComponent } from './Controls/cms-date-picker/cms-date-picker.component';
import { DroppedDirective } from './Directives/dropped.directive';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { CmsCheckBoxComponent } from './Controls/cms-check-box/cms-check-box.component';
import { AngularWebStorageModule } from 'angular-web-storage';
import { TestFooterComponent } from './test-footer/test-footer.component';
import { MyDirectiveDirective } from './Directives/my-directive.directive';
import { AlertService } from './services/alert.service';


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    CandidateComponent,
    UserRegisterComponent,
    AlertComponent,
   CMSNavComponent,
   UserListComponent,
   V1DesignerComponent,
   TestDragAndDropComponent,
   CmsTextBoxComponent,
   CmsDatePickerComponent,
   DroppedDirective,
   CmsCheckBoxComponent,
   TestFooterComponent,
   MyDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    BrowserAnimationsModule,
    DragAndDropModule.forRoot(),
    InputsModule,
    MenuModule,
    PopupModule,
    TreeViewModule,
    ResizableModule,
    DateInputsModule,
    AngularWebStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CmsTextBoxComponent, CmsDatePickerComponent, CmsCheckBoxComponent]
})
export class AppModule { }
