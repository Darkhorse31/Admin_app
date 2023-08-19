import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apiservice/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private apiService:ApiService) { }
  dashborddata:any={}
  ngOnInit(): void {
    this.apiService.getuserDashboard().subscribe((response:any)=>{
       if(response?.data?.length>0){
        this.dashborddata=response?.data[0]
        console.log(this.dashborddata)
       }
    })
  }
  jsonparseData(data:any){
   try {
    return JSON.parse(data)?.length
   } catch (error) {
    return 0
   }
  }

}
