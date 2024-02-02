import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:3000/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      username,
      password
    }, httpOptions);
  }

  register(firstName:String, lastName:String, street:String ,address:String, city:String
    , state:String, email:String, username:String, password:String): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      firstName:firstName,
      lastName:lastName,
      street:street,
      address:address,
      city:city,
      state:state,
      email:email,
      username:username,
      password:password
    }, httpOptions);
  }
}
