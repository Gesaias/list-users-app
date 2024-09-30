import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { IUser } from '../../models/user.model';
import { UserService } from '@/app/services/user/user.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserListAllHeaderComponent } from "../../components/user-list-all-header/user-list-all-header.component";
import { UserItemComponent } from "../../components/user-item/user-item.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-all-users',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    UserListAllHeaderComponent,
    UserItemComponent,
  ],
  templateUrl: './list-all-users.component.html',
  host: {
    class: 'flex flex-col h-full w-full items-center',
  },
})
export class ListAllUsersComponent implements OnInit {
  users: WritableSignal<IUser[]> = signal<IUser[]>([]);
  userSelect: WritableSignal<IUser | undefined> = signal<IUser | undefined>(undefined);

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getAll().subscribe((users) => {
      this.users.set(users);
    });
  }

  toogleSelect(user: IUser): void {
    this.userService.getOne(user.id).subscribe((user: IUser) => {
      this.userSelect.set(user);
      console.log(this.userSelect());
    });
  }
}

