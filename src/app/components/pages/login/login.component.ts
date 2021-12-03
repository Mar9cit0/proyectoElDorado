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
  public hasErrors = false;
  public errors:any[] = []
  constructor(private authService: AuthService, private router: Router) { }


  ngOnInit(): void { }

  Logar() {

    this.authService.Autenticar(this.Usuario).subscribe(

      (Response) => {
        console.log(Response);
        const token = Response.data.token;
        const email = Response.email;
        window.localStorage.setItem("_token", token);
        window.localStorage.setItem("_email", email);
        this.router.navigate(["home"])
      },
      error => {
        console.log('error', error);
        this.hasErrors = true;

        if (error.status === 401) {
          this.errors.push(error.error.data.title)
        }
        if (error.status === 409) {
          this.errors.push(error.error.data.title)
        }
  
        for(let err of error.error.message) {
          this.errors.push(err.message);
        }
      }

    );

   }


}
