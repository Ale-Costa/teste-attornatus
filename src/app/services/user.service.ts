import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: 'https://sheet.best/api/sheets/c9cbfdac-d8a6-495f-ab82-d9c080015b13';
  

  constructor(private httpClient: HttpClient) { }

  getUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiUrl);
  }

  postUser(user: User):Observable<User>{
    console.log(user)
    return this.httpClient.post<User>(this.apiUrl, user);
  }
}
