import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    if(this.isMenuOpen = true) {
      
    }
  }

}
