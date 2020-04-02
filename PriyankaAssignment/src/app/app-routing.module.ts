import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {RegisterUserComponent} from './register-user/register-user.component'
const routes: Routes = [{path:'',component:LoginComponent},
{path:'registration',component:RegisterUserComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
