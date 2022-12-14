import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../Model/User';
import { UserLogin } from '../Model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(userLogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>('http://localhost:8080/usuarios/logar', userLogin)
  }

  signup(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:8080/usuarios/cadastrar', user)
  }

  logged() {
    let ok: boolean = false;

    if(environment.token != '') {
      ok = true
    }

    return ok
  }

  headerHomeBtn() {
    let ok: boolean = false;

    if(environment.token == '') {
      ok = true
    }

    return ok
  }
  
}