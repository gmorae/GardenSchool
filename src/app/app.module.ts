import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { CarousselComponent } from './components/caroussel/caroussel.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { AdmComponent } from './pages/adm/adm.component';
import { AuthService } from './pages/login/auth.service';
import { FormsModule } from '@angular/forms';
import { CadastrarAlunoComponent } from './pages/adm/cadastrar-aluno/cadastrar-aluno.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastrarProfComponent } from './pages/adm/cadastrar-prof/cadastrar-prof.component';
import { CadastroCursoComponent } from './pages/adm/cadastro-curso/cadastro-curso.component';
import { CardComponent } from './components/card/card.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CarousselComponent,
    CursosComponent,
    FooterComponent,
    LoginComponent,
    AdmComponent,
    CadastrarAlunoComponent,
    CadastrarProfComponent,
    CadastroCursoComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
