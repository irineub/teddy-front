import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();

  constructor() {
    this.userSubject.next(null);
  }

  setUser(user: any) {
    this.userSubject.next(user);
  }

  logout() {
    this.userSubject.next(null);
  }
}
