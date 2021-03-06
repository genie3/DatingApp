import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.apiUrl + 'users/';

constructor(private http: HttpClient) { }

getUsers(): Observable<User[]> {
  return this.http.get<User[]>(this.baseUrl);
}

getUser(id): Observable<User> {
  return this.http.get<User>(this.baseUrl + id);
}

}
