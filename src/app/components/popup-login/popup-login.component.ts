import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-popup-login',
  templateUrl: './popup-login.component.html',
  styleUrls: ['./popup-login.component.scss']
})
export class PopupLoginComponent {

  public constructor(public dialog: MatDialog, private router: Router) {}

  home2(){
    this.router.navigate(['/home']);  
  }
}
