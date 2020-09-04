import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { Usuario } from '../clases/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario:Usuario;

  constructor(private loginServ:AuthService,
    private router:Router) { 
    this.usuario = new Usuario();
  }

  ngOnInit() {
  }
  Ingresar(){
    var a = this.loginServ.login(this.usuario.email,this.usuario.clave);
    // console.log(a)  ;
    // this.router.navigate(['Home']);
  }
}
