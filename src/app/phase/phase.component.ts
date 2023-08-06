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
  ngOnInit(){
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
  onSubmit() {
    console.log(this.batchform.value)
    if (this.batchform.valid) {
     this.api.insertBatches(this.batchform.value).subscribe((response:any)=>{
      if(response){
        this.getBatchList()
            }
     })
    }
  }

}
