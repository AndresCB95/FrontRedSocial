import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AutenticacionService } from '../../service/autenticacion.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  constructor(private autenticacion_service : AutenticacionService){

  }


  user_email:FormControl = new FormControl('');
  password:FormControl = new FormControl('');
  errorLogin:boolean=false

  registrarse(){
    this.autenticacion_service.registro(this.user_email.value, this.password.value).subscribe(
      {
        next:
     (data) => 
        console.log(data),
    
    error:(error)=>{
      console.error('There was an error!', error)
    }
  });
  }
}
