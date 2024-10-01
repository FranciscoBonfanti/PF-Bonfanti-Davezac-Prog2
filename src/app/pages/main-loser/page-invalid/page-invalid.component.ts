import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-invalid',
  templateUrl: './page-invalid.component.html',
  styleUrls: ['./page-invalid.component.scss']
})
export class PageInvalidComponent {

  public constructor(
    private router: Router
  ){}
  
  navegar(){
    this.router.navigate(['login'])
  }

}
