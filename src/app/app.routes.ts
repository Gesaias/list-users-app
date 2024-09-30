import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { ListAllUsersComponent } from './users/list-all-users/list-all-users.component';

export const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: ListAllUsersComponent },
  { path: 'users/create', component: CreateUserComponent },
  { path: 'users/edit', component: EditUserComponent },
  { path: '**', component: NotFoundComponent },
];
