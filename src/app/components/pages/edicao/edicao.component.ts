import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Movies from 'src/app/models/movies.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.css']
})
export class EdicaoComponent implements OnInit {

  public idMovie:any;
  public categorias:any;
  public movie:any;
  public tipoSeleccionado: any='';
  public errors: any[] = [];

  public movieUp: Movies = {
    data: {
      id:'',
      title: '',
      categoria: '',
      tempo: '',
      descripcao: '',
      ano: '',
    }
  };
  public file:any;
  public hasErrors=false;
  public hasSuccess:any;
  public successMessage:any;
  constructor(private movieService: MoviesService, private categoriaService: CategoriaService, private router: Router,private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.idMovie = this.route.snapshot.params['id'];
    this.getCategoria();

    if(this.idMovie != undefined ) {
      this.getDadoById();
    }
  
  }

  getCategoria() {

    this.categoriaService.getAll().subscribe(

      categorias => {
        this.categorias = categorias;
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

  getDadoById() {

    console.log(this.idMovie);
    this.movieService.getById(this.idMovie).subscribe(
      movies => {
        this.movie = movies;
        console.log('ddddd',this.movie);
      },
      error => {
        console.log('eeee',error.status);
        this.hasErrors = true;
        if (error.status !== '') {
          this.errors.push('Erro ao carregar dados')
        }
      }

    );
  }


  salvarDados() {

    if( this.idMovie !=  undefined ){
      this.movieService.getAll().subscribe(

        movie => {
          this.movie = movie;
        },
        error => {
          this.hasErrors = true;
  
          if (error.status !== '') {
            this.errors.push('Erro ao carregar dados')
          }
  
        }
  
      );
    } else {
 
    
        let formData: FormData = new FormData();
        formData.append('title', this.movieUp.data.title);
        formData.append('descripcao', this.movieUp.data.descripcao);
        formData.append('categoria', this.movieUp.data.categoria);
        formData.append('ano', this.movieUp.data.ano)
    
        if(this.file){
          formData.append("portada", this.file, this.file['name']);
        }
        
        this.movieService.update(formData).subscribe(movies => {
          this.hasSuccess = true;
          this.successMessage = movies.data.title
          this.movieUp = {    
            data: {
              id:'',
              title: '',
              categoria: '',
              tempo: '',
              descripcao: '',
              ano: '',               
            }
          };
        }, error => {
          console.log(error)
          this.hasErrors = true;
    
          if (error.status === 409) {
            this.errors.push(error.error.data.title)
          }
    
          for(let err of error.error.message) {
            this.errors.push(err.message);
          }
        })
     
     
    }

  }

  volver(){
    this.router.navigate(["listagem"])
  }

}
