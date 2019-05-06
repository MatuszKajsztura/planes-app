import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';
import { UserInfo } from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public credentials = {
    email: '',
    password: '',
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private toast: MatSnackBar,
  ) { }

  public login() {
    this.authService.login(this.credentials)
      .then(this.onLoginSucces.bind(this), this.onLoginFailure.bind(this));
  }

  private onLoginSucces(data) {
    this.router.navigate(['/dashboard']);
    this.toast.open('User has been loged in', '', { panelClass: 'toast-success'});
  }

  private onLoginFailure(error) {
    this.toast.open(error.message, '', { panelClass: 'toast-error'});
  }

}
