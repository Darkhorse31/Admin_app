import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../apiservice/api.service';


@Component({
  selector: 'app-phase',
  templateUrl: './phase.component.html',
  styleUrls: ['./phase.component.scss']
})
export class PhaseComponent implements OnInit {

  showForm:boolean=false
  batchform: FormGroup;
  listuser:any[]=[]
  batchlist:any=[]
  constructor(private formBuilder: FormBuilder,private api:ApiService) {
    this.batchform = this.formBuilder.group({
      username: ['', Validators.required],
      batch_type: ['', Validators.required],
    });
  }
  isSuper:any
  ngOnInit(){
    const user=localStorage.getItem('user')
    if(user){
    this.isSuper=JSON.parse(user)?.user?.super_admin}
    this.getuserlist()
    this.getBatchList()
  }
  getuserlist(){
    this.api.getuser().subscribe((res:any)=>{
      if(res){
        this.listuser=res.data
      }
    })
  }
  getBatchList(){
    this.api.getBatches().subscribe((res:any)=>{
      if(res){
      this.batchlist=res.data
      }
    })
  }
  deletebatch(id:any){
    this.api.deletebatch({id:id}).subscribe((response:any)=>{
      if(response?.success){
        alert(response?.message)
        this.batchlist.find((batch:any,index:number)=>{
          if(batch?.id===id){
            this.batchlist.splice(index,1)
          }
        })
      }
    })
  }
  onSubmit() {
    if (this.batchform.valid) {
     this.api.insertBatches(this.batchform.value).subscribe((response:any)=>{
      if(response){
        this.getBatchList()
        this.batchform.reset()
        alert(response?.message)
            }
     })
    }
  }

}
