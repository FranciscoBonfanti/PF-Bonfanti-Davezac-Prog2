import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageInvalidComponent } from 'src/app/pages/main-loser/page-invalid/page-invalid.component';

@Component({
  selector: 'app-popup-login',
  templateUrl: './popup-login.component.html',
  styleUrls: ['./popup-login.component.scss']
})
export class PopupLoginComponent {

   public constructor(public dialog: MatDialog) {}

  // openAuthDialog(): void {
  //   this.dialog.open(PageInvalidComponent, {
  //     width: '400px'
  //   });
  // }


}
