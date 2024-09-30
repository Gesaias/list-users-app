import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../components/user/types';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: string = 'http://localhost:3001/user';

  constructor(private http: HttpClient) {}

  create(data: { name: string, email: string, telefone: string, type_user: string }): Observable<IUser> {
    return this.http.post<IUser>(this.apiUrl, data);
  }

  getAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.apiUrl);
  }

  getOne(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${this.apiUrl}/${id}`);
  }

  update(id: number, data: { name?: string | undefined, email?: string | undefined, telefone?: string | undefined, type_user?: string | undefined }): Observable<IUser> {
    return this.http.patch<IUser>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number): Observable<IUser> {
    return this.http.delete<IUser>(`${this.apiUrl}/${id}`);
  }
}
