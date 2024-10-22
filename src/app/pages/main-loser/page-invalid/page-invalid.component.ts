import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { PopupLoginComponent } from 'src/app/components/popup-login/popup-login.component';

@Component({
  selector: 'app-page-invalid',
  templateUrl: './page-invalid.component.html',
  styleUrls: ['./page-invalid.component.scss']
})
export class PageInvalidComponent {

  constructor(private router: Router, public dialog: MatDialog) {}

  popupLogin(): void {
    this.dialog.open(PopupLoginComponent, {
      width:"350px"
    });
  }
}
