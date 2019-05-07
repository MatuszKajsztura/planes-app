import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserInfo, User } from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public readonly authState$: Observable<User | null> = this.fireAuth.authState;

  constructor(
    private fireAuth: AngularFireAuth,
  ) { }

  public get user(): User | null {
    return this.fireAuth.auth.currentUser;
  }

  public login(credentials: { email: string, password: string}) {
    return this.fireAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password)
  }

  public register(credentials: { email: string, password: string } ) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
  }


  public logout() {
    return this.fireAuth.auth.signOut();
  }

}
