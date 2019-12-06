import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AdmComponent } from './pages/adm/adm.component';
import { CadastrarAlunoComponent } from './pages/adm/cadastrar-aluno/cadastrar-aluno.component';
import { CadastrarProfComponent } from './pages/adm/cadastrar-prof/cadastrar-prof.component';
import { CadastroCursoComponent } from './pages/adm/cadastro-curso/cadastro-curso.component';
import { ProfComponent } from './pages/prof/prof.component';
import { AtividadesComponent } from './pages/prof/atividades/atividades.component';

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
  },
  {
    path: 'Adm/CadastroProf',
    component: CadastrarProfComponent
  },
  {
    path: 'Adm/CadastroCurso',
    component: CadastroCursoComponent
  },
  {
    path: 'Prof',
    component: ProfComponent
  },
  {
    path: 'Prof/Atividades',
    component: AtividadesComponent
  },
  {
    path: 'User',
    component: AtividadesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
