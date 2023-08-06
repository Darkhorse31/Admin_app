import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectsComponent } from './projects/projects.component';
import { FormsModule } from '@angular/forms';
import { ColorchangeDirective } from './colorchange.directive';
import { RandomComponent } from './random/random.component';
import { PhaseComponent } from './phase/phase.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { ImagedisplayComponent } from './imagedisplay/imagedisplay.component';
@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ColorchangeDirective,
    RandomComponent,
    PhaseComponent,
    UserComponent,
    ImagedisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
