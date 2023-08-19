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
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './token-interceptor.service';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ColorchangeDirective,
    RandomComponent,
    PhaseComponent,
    UserComponent,
    ImagedisplayComponent,
    LoginComponent,
    MainComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
