import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../apiservice/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private loginService:AuthService,private router:Router) { }
  loginForm=new FormGroup({
    username:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
  })

  login(){
    if(this.loginForm?.invalid){
      this.loginForm.get('username')?.markAsTouched()
      this.loginForm.get('password')?.markAsTouched()
    }else{
      this.loginService.login(this.loginForm.value).subscribe((response:any)=>{
        if(response?.success){
          const token={
            token:response?.token,
            user:response?.data
          }
          localStorage.setItem('user',JSON.stringify(token))
          this.router.navigate([''])
         
        }else{
          window.alert(response?.message)
        }
      })
    }

  }

}
