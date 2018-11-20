import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../Models/data-model';
import {ConfirmPasswordValidator} from '../Shared/Validators/cnfpassword.validator';
import { AlertService } from '../services/alert.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registerForm: FormGroup;
  passwordForm: FormGroup;
  submitted = false;
  loading = false;
  //passwordmismatch = false;


  constructor(private router: Router,private formBuilder: FormBuilder, private userService: UserService, private alertService: AlertService) {
    this.createForm();
  }

  ngOnInit() {
    //window.clearInterval(;
  }

  createForm() {

    this.passwordForm = this.formBuilder.group({
      password: ['', Validators.required],
      cnfpassword: ['', Validators.required]
    }, {
      validator: ConfirmPasswordValidator.validate.bind(this)
    });

    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      fullname: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]+'), Validators.minLength(10), Validators.maxLength(10)]],
      address: ['', Validators.required],
      dob: [''],
      passwordForm: this.passwordForm
    });
  }

  addUser() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    const formModel = this.registerForm.value;
    let userData: User;
    userData = {
      username: formModel.username,
      password: formModel.passwordForm.password,
      FullName: formModel.fullname,
      email: formModel.email,
      phone: formModel.phone,
      address: formModel.address,
      dob: formModel.dob
    } as User;

    this.userService.registerUser(userData)
    .subscribe(data=>{
      this.alertService.error('User created successfully.');
      
      var btnCancel = document.getElementById('btnCancel');
      btnCancel.textContent = 'Login';
    });
  }

}
