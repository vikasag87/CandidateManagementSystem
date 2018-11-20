import { Component ,OnInit, Self} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { first } from 'rxjs/operators';
import { AlertService } from '../services/alert.service';
import { Router } from "@angular/router";
import { SessionStorageService } from "angular-web-storage";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  providers: [UserService]
})
export class UserLoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  loading = false;

  constructor(private router: Router,@Self() private userService: UserService, private alertService: AlertService, private session: SessionStorageService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.loginForm = new FormGroup({
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    });
  }

  validateUser() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    const formModel = this.loginForm.value;
    this.userService.validateUser(formModel.username, formModel.password).pipe(first())
      .subscribe(
        data => {
          if (data && data.Id > 0) {
            this.session.set('_username', data.FullName);
            this.router.navigate(['/cmsnav']);
            //this.router.navigate(['/v1designer']);
          }
          else {
            this.alertService.error('Username or password is incorrect.');
            this.loading = false;
          }
        });
  }

  outDataReceived(data:any){
    //debugger;
    alert(data);
  }
}
