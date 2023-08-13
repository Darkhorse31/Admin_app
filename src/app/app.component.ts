import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RandomComponent } from './random/random.component';
import { AuthService } from './apiservice/auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Test';
  data:any={name:1,
  n:null,
  changeDetection:false
  }
  constructor(private router:Router,private AuthService:AuthService){

  }
  l=['p1','p2','p3','p4','p5','p6','p7']
  ngOnInit(){
    if(!this.AuthService.gettoken()){
      this.router.navigate(['login'])
    }
  }
  
  
  
}
