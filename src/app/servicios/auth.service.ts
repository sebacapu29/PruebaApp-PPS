import { Injectable } from '@angular/core';
import { AngularFireAuth } from  "@angular/fire/auth";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private firebaseAuth:AngularFireAuth,private router:Router) { }

  async login(email: string, password: string) {
    var result = await this.firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(()=>this.router.navigate(['home']))
    .catch((resp)=>{
      // console.log("error logueo");
      alert("Error de logueo");
      return resp;
    }); 
    return result;
}

  logOut(){
    this.firebaseAuth.signOut();
    this.router.navigate(['Login']);
  }
}
