import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apiservice/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isSuper:any
  admin:any
  constructor(private apiService:ApiService) { }
  dashborddata:any={}
  dashboardObject={
    images:0,
    admin:0,
    user:0,
    batchassignBuyadmin:0,
    batches:0,
    usedbaches:0,
    sumofbatchesadmin:0
  }
  ngOnInit(): void {
    const user=localStorage.getItem('user')
    if(user){
    this.isSuper=JSON.parse(user)?.user?.super_admin
    this.admin=JSON.parse(user)?.user?.admin}
    this.apiService.getuserDashboard().subscribe((response:any)=>{
       if(response?.data?.length>0 && this.isSuper){
        this.dashborddata=response?.data[0]
        this.dashboardObject.admin=this.dashborddata?.admin
        this.dashboardObject.images=this.dashborddata?.images
        this.dashboardObject.batchassignBuyadmin=this.dashborddata?.batchesAssignbyadmin
        this.dashboardObject.user=this.dashborddata?.user
       }else{
        let data=response?.data.reduce((acc:any,data:any)=>{
          acc={...acc,...data}
          return acc
        },{})
        this.dashboardObject.sumofbatchesadmin=data?.sumbatches
        this.dashboardObject.images=data?.image
        this.dashboardObject.batchassignBuyadmin=data?.countbatch
        this.dashboardObject.user=data?.user
        this.dashboardObject.batches=data?.batch
        this.dashboardObject.usedbaches=data?.totalusedbatch
        console.log(this.dashboardObject)
        
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
