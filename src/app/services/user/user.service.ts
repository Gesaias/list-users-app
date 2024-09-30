import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../../components/user/types';
import CreateUserDto from './dto/create-user-dto';
import UpdateUserDto from './dto/update-user-dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: string = 'http://localhost:3001/user';

  constructor(private http: HttpClient) {}

  create(data: CreateUserDto): Observable<IUser> {
    return this.http.post<IUser>(this.apiUrl, data);
  }

  getAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.apiUrl);
  }

  getOne(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${this.apiUrl}/${id}`);
  }

  update(id: number, data: UpdateUserDto): Observable<IUser> {
    return this.http.patch<IUser>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number): Observable<IUser> {
    return this.http.delete<IUser>(`${this.apiUrl}/${id}`);
  }
}
