import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AutenticacionService } from '../../service/autenticacion.service';
import { error } from 'console';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../service/local-storage.service';

@Component({
  selector: 'app-autenticacion',
  templateUrl: './autenticacion.component.html',
  styleUrl: './autenticacion.component.css'
})
export class AutenticacionComponent {

  constructor(private autenticacion_service : AutenticacionService, private router: Router, private localstorage:LocalStorageService){

  }


  user_email:FormControl = new FormControl('');
  password:FormControl = new FormControl('');
  errorLogin:boolean=false

  autenticar(){
    this.autenticacion_service.logIng(this.user_email.value, this.password.value).subscribe(
     {
      next: (data) => {
        console.log(data)
        this.localstorage.setItem("token",data.token)
        this.localstorage.setItem("username",data.username)

        this.router.navigate(['/publicacion'])
      },  
     error: (error)=>{
      console.error('There was an error!', error)
      this.errorLogin = true
    }
  });
  }
}
