import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from '../user/types';

@Component({
  selector: 'app-user-item',
  standalone: true,
  imports: [],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css'
})
export class UserItemComponent implements OnInit {
  @Input() user!: IUser;
  @Output() onDeleteUser = new EventEmitter<IUser>();

  ngOnInit(): void {
    console.log(this.user);
  }

  onDelete(user: IUser): void {}

  onToggle(user: IUser): void {

  }
}
