import { Component, OnInit } from '@angular/core';
import { AuthService } from '../apiservice/auth/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  changePass:FormGroup
  changepass:boolean=false
  username:string=''
  constructor(private auth:AuthService,private router:Router) {
    this.changePass=new FormGroup({
     username:new FormControl(''),
     oldpass:new FormControl(''),
     newpass:new FormControl('')
    })
   }
   isSuper:any
   admin:any
  
  ngOnInit(): void {
    const user=localStorage.getItem('user')
    if(user){
    this.username=JSON.parse(user)?.user?.email 
    this.isSuper=JSON.parse(user)?.user?.super_admin
    this.admin=JSON.parse(user)?.user?.admin
  }
  }
  logout(){
    this.auth.logout().subscribe((response:any)=>{
      if(response?.success){
        this.router.navigate(['login'])
        localStorage.clear()
      }
    })
  }
  click(){
    this.changepass=!this.changepass
  }
  changePassword(){
    const user=localStorage.getItem("user")
    if(user?.length && user?.length>5){
      this.changePass.value.username=JSON.parse(user)?.user?.email
    }
    this.auth.changepass(this.changePass.value).subscribe((response:any)=>{
      alert(response?.message)
    })
    
  
  }
}
