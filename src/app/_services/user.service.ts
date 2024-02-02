import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const API_URL = 'http://localhost:3000/api/customers/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
headers: new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': 'your_token_here'  // Replace 'your_token_here' with your actual token
})

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private tokenStorage:TokenStorageService) { }
}
