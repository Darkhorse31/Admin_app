import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../apiservice/api.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  showForm:boolean=false
  batchform: FormGroup;
  listuser:any[]=[]
  batchlist:any=[]
  studentInfo:any=[]
  constructor(private formBuilder: FormBuilder,private api:ApiService) {
    this.batchform = this.formBuilder.group({
      username: ['', Validators.required],
      batch_type: ['', Validators.required],
    });
  }
  parse(data:any){
  try {
  return JSON.parse(data)
  } catch (error) {
    return ''
  }

  }
  ngOnInit(){
    this.getBatchList()
    this.getStuInfo()
    this.batchform.get("batch_type")?.valueChanges.subscribe((data:any)=>{
      this.api.getStudentInfoWithSearch({searchText:data}).subscribe((response:any)=>{
        if(response){
          this.studentInfo=response.data
        }
      })
    })
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
  getStuInfo(){
    this.api.getStudent().subscribe((response:any)=>{
  if(response){
    this.studentInfo=response.data
  }
    })
  }
  onSubmit() {
    
  }

}
