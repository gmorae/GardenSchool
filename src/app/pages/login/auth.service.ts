import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  msg = ''
  msgErro = false
  private userAuth: boolean = false
  constructor(private rota: Router) { }

  fazerLogin(user: Login) {
    if (user.email === 'admin@teste.com' && user.senha === 'admin') {
      this.userAuth = true;
      this.rota.navigate(['/Adm'])

    } else if (user.email === 'aluno@teste.com' && user.senha === 'aluno') {
      this.userAuth = true;
      this.rota.navigate(['/User'])
    } else if (user.email === 'prof@teste.com' && user.senha === 'prof') {
      this.userAuth = true;
      this.rota.navigate(['/Prof'])
    } else {
      this.userAuth = false;
      alert('Usuario ou senha incorretos')
    }
  }
}
