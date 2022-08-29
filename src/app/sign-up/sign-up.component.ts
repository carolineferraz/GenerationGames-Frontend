import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Model/User';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: User = new User
  confirmPassword: string
  userType: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  verifyPassword(event: any) {
    this.confirmPassword = event.target.value
  }

  readUserType(event: any) {
    this.userType = event.target.value
  }

  signup() {
    this.user.tipo = this.userType

    if(this.user.senha != this.confirmPassword) {
      alert("Passwords do not match")
    } else {
      this.authService.signup(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(["/login"])
        alert("User registered successfully")
      })
    }
  }

}
