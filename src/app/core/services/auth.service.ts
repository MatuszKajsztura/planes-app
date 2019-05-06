import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserInfo } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userData: UserInfo;

  constructor(
    private fireAuth: AngularFireAuth,
  ) { }

  public login(credentials: { email: string, password: string}) {
    return this.fireAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password)
      .then((userCredentials) => this.userData = userCredentials.user);
  }

  public get user() {
    return this.userData;
  }

  public logout() {
    this.userData = null;
    return this.fireAuth.auth.signOut();
  }

  public isLoggedIn() {
    return !!this.userData;
  }
}
