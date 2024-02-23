import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { autenticacion_var } from '../../environment/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private http: HttpClient) { }

  url:string = autenticacion_var.url + autenticacion_var.port

  logIng(user_email:string, password:string):Observable<{token:string, username:string}>{
    
    return this.http.post(this.url + autenticacion_var.metodos.logIn, 
      {"username":user_email, "password":password}) as Observable<{token:string, username:string}>

  }

  registro(user_email:string, password:string){
   
    return this.http.post(this.url + autenticacion_var.metodos.registro, 
      {"username":user_email, "password":password})

  }


}
