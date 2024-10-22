import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  username: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.username = localStorage.getItem('email') || 'Nombre de Usuario';
  }

  logout(): void {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    this.router.navigate(['/']);
  }
}