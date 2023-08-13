import { Component, OnInit } from '@angular/core';
import { AuthService } from '../apiservice/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.auth.logout().subscribe((response:any)=>{
      if(response?.success){
        this.router.navigate(['login'])
        localStorage.clear()
      }
    })
  }
}
