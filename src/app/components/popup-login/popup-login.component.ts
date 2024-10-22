import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-popup-login',
  templateUrl: './popup-login.component.html',
  styleUrls: ['./popup-login.component.scss']
})
export class PopupLoginComponent {

  constructor(public dialog: MatDialog, private router: Router) {}

  home2(email: string, password: string){
    if (email && password) {
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);  
      this.router.navigate(['/home']);
    } else {
      alert('Por favor, completa ambos campos');
    }
  }
}