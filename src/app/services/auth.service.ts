import { inject, Injectable } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  UserCredential
} from '@angular/fire/auth';

import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _auth = inject(Auth);

  userName: any;

  constructor(
    private afAuth: AngularFireAuth,
    ) {}

  ngOnInit() {
  }

  byGoogle(): Promise<UserCredential> {
    return signInWithPopup(this._auth, new GoogleAuthProvider());
  }

  signOut() {
    console.log(this._auth.currentUser?.displayName);
    return signOut(this._auth);
  }

  getAuthState() {
    this.afAuth.authState.subscribe(user => {
      if(user) {
        this.userName == user.displayName;
        console.log(this.userName);
      } else {
        this.userName == "no user";
      }
    })
  }

}
