import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Category } from '../Model/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:8080/categorias', this.token)
  }

  postCategory(category: Category): Observable<Category> {
    return this.http.post<Category>('http://localhost:8080/categorias', category, this.token)
  }

}

