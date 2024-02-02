import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const API_URL = 'http://localhost:3000/api/customers/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' ,
                              'Authorization': TOKEN_KEY})
};


@Injectable({
  providedIn: 'root'
})

export class TokenStorageService {
  constructor(private http: HttpClient) { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }
  getUsers(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + this.getToken() || ''
      })
    };

    // Make the HTTP request
    return this.http.get(API_URL + 'getAll', httpOptions);
  }
  deleteUser(userid:string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + this.getToken() || ''
      })
    };

    // Make the HTTP request
    return this.http.delete(API_URL + 'delete/'+userid, httpOptions);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
}
