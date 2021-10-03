import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUserComponent } from './components/user/login-user/login-user.component';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
  { path: 'Login-User', component: LoginUserComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
