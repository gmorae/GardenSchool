import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AdmComponent } from './pages/adm/adm.component';
import { CadastrarAlunoComponent } from './pages/adm/cadastrar-aluno/cadastrar-aluno.component';

const routes: Routes = [
  {
    
    path: '',
    component: HomeComponent
  },
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'Adm',
    component: AdmComponent
  },
  {
    path: 'Adm/CadastroAluno',
    component: CadastrarAlunoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
