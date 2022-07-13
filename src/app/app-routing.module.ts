import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Webpages/homepage/homepage.component';
import { LoginComponent } from './Webpages/login/login.component';
import { LogoutComponent } from './Webpages/logout/logout.component';

const routes: Routes = [
  {path:'', component: HomepageComponent},
  {path:'login', component: LoginComponent},
  {path:'logout', component: LogoutComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
