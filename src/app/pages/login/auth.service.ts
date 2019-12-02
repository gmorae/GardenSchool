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
    if (user.email === 'a@a.com' && user.senha === '123') {
      this.userAuth = true;
      this.rota.navigate(['/Adm'])

    } else {
      this.userAuth = false;
      alert('Usuario ou senha incorretos')

    }

  }
}
