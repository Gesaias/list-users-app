import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-list-all-header',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './user-list-all-header.component.html',
})
export class UserListAllHeaderComponent {
  faPlus = faPlus;
}
