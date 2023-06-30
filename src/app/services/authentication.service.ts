import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Observable, from, of } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class AuthenticationService{
    constructor(private afAuth: AngularFireAuth) { }

    SignIn(credentials: { email: string; password: string }): Observable<any> {
        return from(
          this.afAuth.signInWithEmailAndPassword(
            credentials.email,
            credentials.password
          )
        );
      }
    }
  type SignIn = {
    email: string;
    password: string;
  };