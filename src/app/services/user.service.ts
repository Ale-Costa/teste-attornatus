import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'https://sheet.best/api/sheets/a27917fd-27c4-49d9-8d5c-d70f4128a3f0';
 

  constructor(private httpClient: HttpClient) { }

  getUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiUrl);
  }

  postUser(user: User):Observable<User>{
    console.log(user);
    return this.httpClient.post<User>(this.apiUrl, user);
  }

  getUser(id: number):Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.apiUrl}/id/${id}`);      
  }

  updateUser(id: number, user: User):Observable<User>{
    return this.httpClient.put<User>(`${this.apiUrl}/id/${id}`, user)
  }

  deleteUser(id: number):Observable<User>{
    return this.httpClient.delete<User>(`${this.apiUrl}/id/${id}`)
  }
}
