import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { IUser } from './types';
import { UserItemComponent } from "../user-item/user-item.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, UserItemComponent],
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {
  users: WritableSignal<IUser[]> = signal<IUser[]>([]);

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getAll().subscribe((users) => {
      console.log(users);
      this.users.set(users);
    });
  }
}
