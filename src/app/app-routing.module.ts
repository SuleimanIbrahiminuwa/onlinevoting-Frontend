import { NgModule } from "@angular/core";
import {Routes, RouterModule} from '@angular/router';
import { LandingpageComponent } from './component/landingpage/landingpage.component';
import { SignupComponent } from './component/signup/signup.component';
import { LoginComponent } from "./component/login/login.component";
import { ResetPassword } from "./component/reset-password/reset-password.component";


const routes: Routes = [
    { path: '', component: LandingpageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent},
  {path: 'reset-password', component: ResetPassword}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

  
}

