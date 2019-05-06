import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserInfo } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public readonly authState$ = this.fireAuth.authState;

  constructor(
    private fireAuth: AngularFireAuth,
  ) { }

  public login(credentials: { email: string, password: string}) {
    return this.fireAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password)
  }

  public register(credentials: { email: string, password: string } ) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
  }

  public get user() {
    return this.fireAuth.auth.currentUser;
  }

  public logout() {
    return this.fireAuth.auth.signOut();
  }

}
