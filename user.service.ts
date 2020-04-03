import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  isAuthenticated = false;
  constructor(private http:HttpClient) { }
  authenticateUser(url){
    return this.http.get(environment.url+url);
  }
  setAuthenticatedFlag(authenticated){
    this.isAuthenticated = authenticated;
  }

  registerUser(url,data){
    console.log(url, data)
    return this.http.post(environment.url+url,data)
  }

}
