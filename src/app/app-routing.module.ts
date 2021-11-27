import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { EdicaoComponent } from './components/pages/edicao/edicao.component';
import { ListagemComponent } from './components/pages/listagem/listagem.component';

const routes: Routes = [
  { path: '', redirectTo:'home',pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent  },
  { path: 'listagem', component: ListagemComponent },
  { path: 'edicao',   component: EdicaoComponent   },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
