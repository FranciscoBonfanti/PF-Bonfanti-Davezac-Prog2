import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { PageInvalidComponent } from './pages/main-loser/page-invalid/page-invalid.component';

const routes: Routes = [
  {path:'login', component: FormLoginComponent},
  {path:'home', component: PageInvalidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
