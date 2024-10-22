import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { PageInvalidComponent } from './pages/main-loser/page-invalid/page-invalid.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: PageInvalidComponent, pathMatch: 'full' },  
  { path: 'login', component: FormLoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
