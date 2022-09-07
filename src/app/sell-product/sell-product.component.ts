import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-sell-product',
  templateUrl: './sell-product.component.html',
  styleUrls: ['./sell-product.component.css']
})
export class SellProductComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

    window.scroll(0,0)

    if(environment.token == '') {
      alert('Your session has expired, please login again')
      this.router.navigate(['/home'])
    }
    
  }

}
