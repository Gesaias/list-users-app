import { IUser } from '@/app/models/user.model';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark, faTrash } from '@fortawesome/free-solid-svg-icons';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    HlmButtonDirective,
  ],
  templateUrl: './edit-user.component.html',
})

export class EditUserComponent implements OnInit {
  @Input() user?: IUser | undefined;
  @Output() onDelete = new EventEmitter<IUser>();
  @Output() onUpdate = new EventEmitter<IUser>();

  name: WritableSignal<string> = signal("");
  email: WritableSignal<string> = signal("");
  telefone: WritableSignal<string> = signal("");
  type: WritableSignal<string> = signal("");

  faXmark = faXmark;
  faTrash = faTrash;

  ngOnInit(): void {
    if (this.user) {
      this.name.set(this.user.name);
      this.email.set(this.user.email);
      this.telefone.set(this.user.telefone);
      this.type.set(this.user.type_user!.type);
    }
  }

  clearInputs(): void {
    this.name.set("");
    this.email.set("");
    this.telefone.set("");
    this.type.set("");
  }

  onClose(): void {
    this.user = undefined;
    this.clearInputs();
  }

  delete(user: IUser): void {
    this.onDelete.emit(user);
    this.onClose();
    this.clearInputs();
  }

  update(): void {
    this.name.update((value) => {
      return value && value.length > 0 ? value : this.user!.name;
    })

    this.email.update((value) => {
      return value && value.length > 0 ? value : this.user!.email;
    })

    this.telefone.update((value) => {
      return value && value.length > 0 ? value : this.user!.telefone;
    })

    this.type.update((value) => {
      return value && value.length > 0 ? value : this.user!.type_user!.type;
    })
    this.onUpdate.emit({
      id: this.user!.id,
      name: this.name(),
      email: this.email(),
      telefone: this.telefone(),
      type_user: {
        id: this.user!.type_user!.id,
        type: this.type(),
        user_id: this.user!.id.toString(),
      },
    });
    this.clearInputs();
  }
}
