import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Category } from '../Model/Category';
import { CategoryService } from '../Service/category.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {

  category: Category = new Category()
  categoryList: Category[]


  constructor(
    private router: Router,
    private categoryService: CategoryService
    ) { }


  ngOnInit() {

    window.scroll(0,0)

    if(environment.token == '') {
      alert('Your session has expired, please login again')
      this.router.navigate(['/home'])
    }

  }


  createCategory() {
    this.categoryService.postCategory(this.category).subscribe((resp: Category)=>{
      this.category = resp
      alert('Category registered successfully')
      this.category = new Category()
    })
  }


}

