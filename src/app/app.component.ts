import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterOutlet } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule,NgxPaginationModule, MatDialogModule ],
  
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'teddy-front';
}
