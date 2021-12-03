import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  public movies: any;
  public email: any;
  public hasErrors = false;
  public errors: any[] = []
  public tipo: any;
  constructor(private movieService: MoviesService, private router: Router) { }

  ngOnInit(): void {
    this.cargarMovies();
  }

  cargarMovies() {

    this.email = window.localStorage.getItem("_email");

    this.movieService.getAll().subscribe(

      movies => {
        this.movies = movies;
      },
      error => {
        this.hasErrors = true;

        if (error.status !== '') {
          this.errors.push('Erro ao carregar dados')
        }

      }

    );
  }

  editarMovie(id:any) {
    this.tipo = 1;

    this.router.navigate(['/edicao/' + id]);
  }

  borrarMovie(id:any) {

    const result  = window.confirm("Você deseja realmente deletar este filme?");

    if(result=== true){

      this.movieService.deleteMovie(id).subscribe(

        (Response) => {
          alert("Filme apagado com sucesso!");
          location.reload();
        },
        error => {
    
          this.hasErrors = true;
  
          if (error.status !== '') {
             alert('Error ao deletar filme');
          }
        }
  
      );
  
    }

  }


}
