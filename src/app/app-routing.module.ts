import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { PhaseComponent } from './phase/phase.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
   {
    path:'login',
    component:LoginComponent
   },
   {
    path:'',
    canActivate:[AuthGuard],
    component:MainComponent,
    children:[
      {
        path:"phase",
        component:PhaseComponent
       },
       {
         path: 'studentInfo',
         component: ProjectsComponent,
       },
       {
         path:"user",
         component:UserComponent
       },
       {
         path:"dashboard",
         component:DashboardComponent
       },
    ]
   },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
