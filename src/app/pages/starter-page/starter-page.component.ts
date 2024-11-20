import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-starter-page',
  standalone: true,
  templateUrl: './starter-page.component.html',
  imports: [FormsModule],
  styleUrls: ['./starter-page.component.scss']
})
export class StarterPageComponent {
  userName: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  handleSubmit(event: Event): void {
    event.preventDefault();
    if (this.userName) {
      this.authService.setUser({ name: this.userName });
      this.router.navigate(['/clients']);
    }
  }
}
