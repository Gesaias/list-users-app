import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';

export const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  {
    path: 'users', component: UserComponent, children: [
      { path: 'create', component: CreateUserComponent },
      { path: 'edit', component: EditUserComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];
