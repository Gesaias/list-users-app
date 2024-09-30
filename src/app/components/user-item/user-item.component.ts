import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../user/types';

@Component({
  selector: 'app-user-item',
  standalone: true,
  imports: [],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css'
})
export class UserItemComponent {
  @Input() user!: IUser;
  @Output() onDeleteUser = new EventEmitter<IUser>();

  onDelete(user: IUser): void {}

  onToggle(user: IUser): void {

  }
}
