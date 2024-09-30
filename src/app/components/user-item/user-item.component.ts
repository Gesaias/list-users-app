import { IUser } from '@/app/models/user.model';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-user-item',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  templateUrl: './user-item.component.html',
})
export class UserItemComponent implements OnInit {
  @Input() user!: IUser;
  @Output() onToogleSelect = new EventEmitter<IUser>();

  ngOnInit(): void {}

  onToggle(user: IUser): void {
    this.onToogleSelect.emit(user);
  }
}
