import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { MainSidebarComponent } from '../../layouts/components/main-sidebar/main-sidebar.component';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private dialog: MatDialog) {}
  openSidenav() {
    this.dialog.open(MainSidebarComponent, {
      width: '250px',
      panelClass: 'sidenav-modal',
      hasBackdrop: true,
      position: { left: '0' },
    });
  }

  closeSidenav() {
    this.dialog.closeAll();
  }
}
