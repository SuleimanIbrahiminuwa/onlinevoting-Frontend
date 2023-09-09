import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { LandingpageComponent } from './component/landingpage/landingpage.component';
import { SignupComponent } from './component/signup/signup.component';
import { LoginComponent } from './component/login/login.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { FirstContainerComponent } from './component/landingpage/firstcontainer/first-container.component';
import { SecondContainerComponent } from './component/landingpage/secon-container/second-conatainer.component';
import { FooterComponent } from './component/landingpage/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/usersApi'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetPassword } from './component/reset-password/reset-password.component'



@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    SignupComponent,
    LoginComponent,
    AdminDashboardComponent,
    FirstContainerComponent,
    SecondContainerComponent,
    FooterComponent,
    ResetPassword
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
 
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
