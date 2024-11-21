import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';
import { CommonModule } from '@angular/common';
import { ClientSelectionService } from '../../../core/services/client-selection.service';
import { UtilsService } from '../../../core/services/utils.service';

@Component({
  selector: 'app-mainheader',
  standalone: true,
  imports: [MatToolbarModule, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './mainheader.component.html',
  styleUrls: ['./mainheader.component.scss']
})
export class MainheaderComponent implements OnInit {
  user$: Observable<any>;
  selectedQtd = 0;

  constructor(
    private router: Router,
    private authService: AuthService,
    private clientSelectionService: ClientSelectionService,
    private utilsService: UtilsService
  ) {
    this.user$ = this.authService.user$;
  }

  ngOnInit(): void {
    this.clientSelectionService.selectedQtd$.subscribe(qtd => {
      this.selectedQtd = qtd;
    });
  } 
  qtd(){
    if(this.selectedQtd !=0){
      return this.selectedQtd
    }
    return null
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
  toggleSidenav() {
    this.utilsService.openSidenav();
  }
}
