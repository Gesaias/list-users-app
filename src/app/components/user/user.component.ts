import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IUser } from './types';
import { UserItemComponent } from "../user-item/user-item.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [UserItemComponent, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
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
