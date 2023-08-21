import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../apiservice/api.service';
import { AuthService } from '../apiservice/auth/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  showForm:boolean=false
  userForm: FormGroup;
  listuser:any[]=[]
  isEdit:boolean=false
  constructor(private formBuilder: FormBuilder,private api:ApiService) {
    this.userForm = this.formBuilder.group({
      first_name: [''],
      last_name: [''],
      email: ['', [Validators.required]],
      mobile: [''],
      number_of_batches: ['', Validators.required],
      password: ['', Validators.required],
      edit_option: [false],
      delete_option: [false],
    });
  }
  ngOnInit(){
    this.getuserlist()
  }
  getuserlist(){
    this.api.getadmin().subscribe((res:any)=>{
      if(res){
        this.listuser=res.data
      }
    })
  }
  onSubmit() {
    if(!this.isEdit){
      this.userForm.value.admin=true
     this.api.insertuser(this.userForm.value).subscribe((response:any)=>{
      if(response){
        this.getuserlist()
      }
     })
    }else{
      this.api.edituser(this.userForm.value).subscribe((response:any)=>{
        this.getuserlist()
        alert(response?.message)
      })
    }
  }
edituserlist(userInfo:any){
  this.showForm=true
  this.isEdit=true
  this.userForm.patchValue(userInfo)
}}


