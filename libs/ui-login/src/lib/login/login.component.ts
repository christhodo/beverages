import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '@beverages/api-interfaces';
import { NotificationsService, AuthService } from '@beverages/core-data';

@Component({
  selector: 'beverages-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userInfo = { email: 'f@f.com', password: 'pass' };
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private notificationsservice: NotificationsService,
    private authservice: AuthService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  login() {
    const inputedUser: User = this.form.value;
    this.notificationsservice.notify('Invalid User');
    if (this.form.invalid) {
      return false;
    } else {
      if (
        inputedUser.email === this.userInfo.email &&
        inputedUser.password === this.userInfo.password
      ) {
        this.authservice.setToken(inputedUser.email);
        this.notificationsservice.notify('Successfully Logged In');
        this.router.navigate(['/sleepers']);
      }
    }
  }

  private initForm() {
    this.form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });
  }
}
