import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logOut() {
    this.router.navigate(['/home'])
    environment.token = ''
    environment.nome = ''
    environment.id = 0
    environment.tipo = ''
  }

  // menu mobile scripts in progress:
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    if(this.isMenuOpen = true) {
      
    }
  }

}
