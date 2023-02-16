import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  username: string;
  password: string;
  id: number;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public username = '';
  public password = '';
  

  constructor(private http: HttpClient) {}

  login() {
    const url = 'https://63ed04e5e6ee53bbf58f7a74.mockapi.io/api';
    this.http.get<User[]>(url).subscribe(users => {
      const user = users.find(u => u.username === this.username && u.password === this.password);
      if (user) {
        // TODO: redirigir al usuario a la página de inicio después de la autenticación
        console.log('Autenticación exitosa');
       // Agregar aquí el console.log
      } else {
        console.log('Usuario o contraseña incorrectos');
      }
    });
  }  
}
