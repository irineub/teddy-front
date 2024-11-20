import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MainheaderComponent } from '../components/mainheader/mainheader.component';

@Component({
  selector: 'app-clients-layout',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MainheaderComponent],
  templateUrl: './clients-layout.component.html',
  styleUrl: './clients-layout.component.scss'
})
export class ClientsLayoutComponent {

}
