import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageInvalidComponent } from './pages/main-loser/page-invalid/page-invalid.component';

@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,
    PageInvalidComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]

  // bootstrap: [AppComponent]
})
export class AppModule { }
