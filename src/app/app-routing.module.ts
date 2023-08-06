import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { PhaseComponent } from './phase/phase.component';
import { UserComponent } from './user/user.component';
const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
