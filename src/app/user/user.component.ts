import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../apiservice/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent  {
  showForm:boolean=false
  userForm: FormGroup;
  listuser:any[]=[]
  constructor(private formBuilder: FormBuilder,private api:ApiService) {
    this.userForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      number_of_batches: ['', Validators.required],
      password: ['', Validators.required],
      edit_option: [false],
      delete_option: [false]
    });
  }
  ngOnInit(){
    this.getuserlist()
  }
  getuserlist(){
    this.api.getuser().subscribe((res:any)=>{
      if(res){
        this.listuser=res.data
      }
    })
  }
  onSubmit() {
    if (this.userForm.valid) {
     this.api.insertuser(this.userForm.value).subscribe((response:any)=>{
      if(response){
        this.getuserlist()
      }
     })
    }
  }

}
