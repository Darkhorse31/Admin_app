import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RandomComponent } from './random/random.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Test';
  data:any={name:1,
  n:null,
  changeDetection:false
  }
  constructor(private router:Router){

  }
  l=['p1','p2','p3','p4','p5','p6','p7']
  ngOnInit(){
    // this.router.config.find((route,idx)=>{
    //   if(route?.path=='projects'){
    //      this.router.config.splice(idx,1)
    //   }
    // })
    // setTimeout(()=>{
    //   this.data.n=["10","10","10","10","10","10","10"]
    //   this.data.changeDetection=true
    // },5000)
  }
  
  
  
}
