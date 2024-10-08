import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'pf-bonfanti.davezac-prog2';

  public constructor(
    private router: Router
  ){}

  ngOnInit(): void {
      this.router.navigate(['/home'])
  }
}
