import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MainheaderComponent } from '../components/mainheader/mainheader.component';
import { MainSidebarComponent } from "../components/main-sidebar/main-sidebar.component";
import { MatSidenavModule } from '@angular/material/sidenav';
import { UtilsService } from '../../core/services/utils.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-clients-layout',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MainheaderComponent, MatSidenavModule, MainSidebarComponent],
  templateUrl: './clients-layout.component.html',
  styleUrls: ['./clients-layout.component.scss']
})
export class ClientsLayoutComponent implements OnInit, OnDestroy {
  sidenavOpen = true;
  private sidenavSubscription: Subscription | null = null; 

  constructor(private utilsService: UtilsService) {}

  ngOnInit() {
    this.sidenavSubscription = this.utilsService.getSidenavState().subscribe(state => {
      console.log("Sidenav state changed:", state); // Verifique se o valor está sendo alterado
      this.sidenavOpen = state;
    });
  }
  

  ngOnDestroy() {
    if (this.sidenavSubscription) {
      this.sidenavSubscription.unsubscribe();
    }
  }

  toggleSidenav() {
    alert("Chamou")
    this.utilsService.toggleSidenav();
  }
}
