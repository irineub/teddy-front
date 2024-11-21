import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() {}
  private sidenavState = new BehaviorSubject<boolean>(false);

  toggleSidenav() {
    this.sidenavState.next(!this.sidenavState.value);
  }
  

  getSidenavState() {
    return this.sidenavState.asObservable();
  }
}
