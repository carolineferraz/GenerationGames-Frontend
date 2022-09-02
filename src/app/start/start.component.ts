import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  nome = environment.nome

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

    window.scroll(0,0)

    if(environment.token == '') {
      alert('Your session has expired, please login again')
      this.router.navigate(['/home'])
    }
  }

}
