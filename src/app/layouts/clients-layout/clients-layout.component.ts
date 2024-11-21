import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MainheaderComponent } from '../components/mainheader/mainheader.component';
import { MainSidebarComponent } from "../components/main-sidebar/main-sidebar.component";

@Component({
  selector: 'app-clients-layout',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MainheaderComponent, MainSidebarComponent],
  templateUrl: './clients-layout.component.html',
  styleUrl: './clients-layout.component.scss'
})
export class ClientsLayoutComponent {

}
