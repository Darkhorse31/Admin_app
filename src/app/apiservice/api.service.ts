import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url="https://extension-api.onrender.com"
  // private url="http://localhost:3000"
  constructor(private http:HttpClient) { }
  getBatches(){
    return this.http.get(`${this.url}/getbatches`)
  }
  getStudentInfoWithSearch(req:any){
    return this.http.post(`${this.url}/studentInfo`,req)
  }
  insertBatches(req:any){
    return this.http.post(`${this.url}/insertbatch`,req)
  }
  getStudent(){
    return this.http.get(`${this.url}/getstudent`)
  }
    getuser(){
    return this.http.post(`${this.url}/getuser`,{})
  }
  insertuser(req:any){
    return this.http.post(`${this.url}/insertuser`,req)
  }
  getImagePathFromDatabase(): Observable<string> {
    return this.http.get<string>(this.url);
  }
  getuserDashboard(){
    return this.http.get(`${this.url}/users/dashboard`)
  }
  deleteStudent(obj:any){
    return this.http.post(`${this.url}/student/delete`,obj)
  }
  edituser(obj:any){
    return this.http.post(`${this.url}/users/edituser`,obj)

  }
}
