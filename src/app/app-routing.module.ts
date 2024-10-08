import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { PageInvalidComponent } from './pages/main-loser/page-invalid/page-invalid.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: PageInvalidComponent },  // Primera vista será PageInvalidComponent
  { path: 'login', component: FormLoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '' }  // Wildcard para rutas no válidas que redirige a PageInvalidComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
