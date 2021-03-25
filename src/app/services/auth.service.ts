import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  /**
   * Login for our Contact App
   * @param user User that's login in
   * @return Observable<boolean>
   */
  login(user: User): Observable<boolean> {

    // We controll credentials of our user
    // we return an Observable of type boolean
    // with the use of the method 'of'
    if (user.username === 'admin' && user.password === 'admin') {
      return of(true);
    } else {
      return of(false);
    }
  }




}
