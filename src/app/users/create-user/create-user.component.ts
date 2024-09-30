import { IUser } from '@/app/models/user.model';
import { UserService } from '@/app/services/user/user.service';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-user.component.html',
})
export class CreateUserComponent {
  name: WritableSignal<string> = signal("");
  email: WritableSignal<string> = signal("");
  telefone: WritableSignal<string> = signal("");
  type: WritableSignal<string> = signal("");

  constructor(private userService: UserService, private router: Router) {}

  onSubmit(): void {
    if (!this.name() || this.name().length < 1) {
      alert("Por favor, preencha o nome");
      return;
    };
    if (!this.email() || this.email().length < 1) {
      alert("Por favor, preencha o email");
      return;
    };
    if (!this.telefone() || this.telefone().length < 1) {
      alert("Por favor, preencha o telefone");
      return;
    };
    if (!this.type()) {
      alert("Por favor, selecione um tipo de usuário");
      return;
    };

    console.log(this.name());
    console.log(this.email());
    console.log(this.telefone());
    console.log(this.type());

    this.userService.create({
      name: this.name(),
      email: this.email(),
      telefone: this.telefone(),
      type_user: this.type(),
    }).subscribe((data) => {
      if (data) this.router.navigate(['/users']);
    });
  }
}
