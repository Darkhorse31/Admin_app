import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../apiservice/api.service';
import { AuthService } from '../apiservice/auth/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent  {
  showForm:boolean=false
  userForm: FormGroup;
  listuser:any[]=[]
  isSuper:any
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
      user:[true]
    });
  }
  ngOnInit(){
    const user=localStorage.getItem('user')
    if(user){
    this.isSuper=JSON.parse(user)?.user?.super_admin}
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
    if(!this.isEdit){
      this.userForm.value.user=true
     this.api.insertuser(this.userForm.value).subscribe((response:any)=>{
      if(response){
        this.getuserlist()
        this.userForm.reset()
        alert("User Inserted Successfully.")

      }
     })
    }else{
      this.api.edituser(this.userForm.value).subscribe((response:any)=>{
        this.getuserlist()
        alert(response?.message)
        this.userForm.reset()

      })
    }
  }
  deleteuser(id:any){
    let obj={
      id:id
    }
    this.api.deleteUser(obj).subscribe((response:any)=>{
      if(response?.success){
        alert(response?.message)
        this.listuser.find((user:any,index:number)=>{
          if(user?.id===id){
            this.listuser.splice(index,1)
          }
        })
      }
    })
  }
edituserlist(userInfo:any){
  this.showForm=true
  this.isEdit=true
  this.userForm.patchValue(userInfo)
}

}
