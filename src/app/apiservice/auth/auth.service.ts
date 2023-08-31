import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url="https://extension-api.onrender.com"
  // private url="http://localhost:3000"
  constructor(private http:HttpClient) { }
  login(req:any){
    return this.http.post(`${this.url}/users/login`,req)
  }
  logout(){
    return this.http.get(`${this.url}/users/logout`)
  }
  gettoken(){
    const user=localStorage.getItem("user")
    if(user?.length && user?.length>5){
      return JSON.parse(user)?.token

    }
  }
  changepass(obj:any){
   return this.http.post(`${this.url}/users/changepass`,obj)
  }
}
