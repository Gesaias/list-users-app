import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { HlmButtonModule } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'app-user-list-all-header',
  standalone: true,
  imports: [FontAwesomeModule, HlmButtonModule, RouterOutlet],
  templateUrl: './user-list-all-header.component.html',
})
export class UserListAllHeaderComponent {
  faPlus = faPlus;

  constructor(private router: Router) {}

  navegateCreateUser(): void {
    this.router.navigate(['/users/create']);
  }
}
