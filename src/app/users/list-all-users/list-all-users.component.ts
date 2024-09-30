import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { IUser } from '../../models/user.model';
import { UserService } from '@/app/services/user/user.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserListAllHeaderComponent } from "../../components/user-list-all-header/user-list-all-header.component";
import { UserItemComponent } from "../../components/user-item/user-item.component";
import { CommonModule } from '@angular/common';
import { EditUserComponent } from "../edit-user/edit-user.component";

@Component({
  selector: 'app-list-all-users',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    UserListAllHeaderComponent,
    UserItemComponent,
    EditUserComponent,
],
  templateUrl: './list-all-users.component.html',
  host: {
    class: 'flex flex-col  w-full items-center mb-16',
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
    });
  }

  updateUser(user: IUser): void {
    this.userService.update(user.id, { name: user.name, email: user.email, telefone: user.telefone, type_user: user.type_user!.type }).subscribe((updatedUser: IUser) => {
      this.getUsers();
      this.userSelect.set(updatedUser);
    });
  }

  deleteUser(user: IUser): void {
    this.userService.delete(user.id).subscribe(() => {
      this.getUsers();
      this.userSelect.set(undefined);
    });
  }
}

