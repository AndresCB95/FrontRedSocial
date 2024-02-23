import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  publicacion_var } from '../../environment/environment';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  headers = new HttpHeaders();

  constructor(private http: HttpClient, private local_storage: LocalStorageService) {
    const token = local_storage.getItem("token")
    const username = local_storage.getItem("username")

    this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8')
    .set('authorization', token==null? '': token)
    .set('username',username==null? '': username)
   }

  url:string = publicacion_var.url + publicacion_var.port

  public publicaciones():Observable<[{title:string,body:string,last_update:string, id_publicacion:string}]>{
    
    return this.http.get(this.url + publicacion_var.metodos.publicaciones,{headers:this.headers} ) as Observable<[{title:string,body:string,last_update:string, id_publicacion:string}]>

  }

  public publicar_muro(title:string, body:string):Observable<[{title:string,body:string,last_update:string, id_publicacion:string}]>{
    
    return this.http.post(this.url + publicacion_var.metodos.publicar,{"title":title,"body":body},
    {headers:this.headers} ) as Observable<[{title:string,body:string,last_update:string, id_publicacion:string}]>

  }

  public update_muro(title:string, body:string, id_publicacion:string):Observable<[{title:string,body:string,last_update:string, id_publicacion:string}]>{
    
    return this.http.put(this.url + publicacion_var.metodos.update,{"title":title,"body":body, "id_publicacion":id_publicacion},
    {headers:this.headers} ) as Observable<[{title:string,body:string,last_update:string, id_publicacion:string}]>

  }

  public delete_muro( id_publicacion:string):Observable<[{title:string,body:string,last_update:string, id_publicacion:string}]>{
    
    return this.http.request('delete',this.url + publicacion_var.metodos.delete,{body:{"id_publicacion":id_publicacion}, headers:this.headers}) as Observable<[{title:string,body:string,last_update:string, id_publicacion:string}]>

  }
}
