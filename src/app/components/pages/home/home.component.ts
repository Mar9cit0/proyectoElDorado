import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public movies:any;
  public email:any;
  public hasErrors = false;
  public errors:any[] = []
  constructor(private movieService: MoviesService, private router: Router) { }

  ngOnInit(): void {
    this.cargarMovies();
  }

  cargarMovies() {
 
    this.email = window.localStorage.getItem("_email");
 
    this.movieService.getAll().subscribe(

      movies => {
        console.log(movies);
        this.movies = movies;
        console.log('<MODDODO',this.movies);

      },
      error => {
        console.log('error', error);
        this.hasErrors = true;

        if (error.status !== '') {
          this.errors.push('Erro ao carregar dados')
        }

      }

    );
  }

}
