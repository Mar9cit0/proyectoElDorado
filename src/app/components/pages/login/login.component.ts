import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public Usuario = {
    status: "",
    email: "",
    senha: "",
    data: {
      token: ""
    }
  }


  constructor(private authService: AuthService, private router: Router) {}

  public hasErrors=false;
  public errors = [];
  ngOnInit(): void { }

  Logar() {
    console.log('logar');
    this.authService.Autenticar(this.Usuario).subscribe(
     response => {
      console.log('response', response);
      const token = response.data.token
      window.localStorage.setItem("_token", token);

      this.router.navigate(["/home"])

    }, error => {
      this.hasErrors = true;

      if (error.status === 401) {
        console.log('error',error);
      }

      for(let err of error.error.message) {
        console.log('error',error);
      }
    })
  }


}
