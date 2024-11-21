import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../../core/services/utils.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-main-sidebar',
  standalone: true,
  imports: [MatSidenavModule, MatListModule, MatIconModule],
  templateUrl: './main-sidebar.component.html',
  styleUrl: './main-sidebar.component.scss'
})
export class MainSidebarComponent{



}
