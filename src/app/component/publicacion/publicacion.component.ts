import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from '../../service/publicaciones.service';
import { error } from 'console';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrl: './publicacion.component.css'
})
export class PublicacionComponent implements OnInit {


  constructor(private public_service: PublicacionesService){
    
  }

  disable:boolean = false
  title:FormControl = new FormControl('')
  body:FormControl = new FormControl('')
  title_edit:FormControl = new FormControl('')
  body_edit:FormControl = new FormControl('')
  disable_editar:boolean = false
  editar_num:string = '-1'

  ngOnInit(): void {
    this.public_service.publicaciones().subscribe({
      next:(data)=>{
        this.publicaciones = data
      },
      error:(error)=>{
        this.publicaciones = []
      }
    })
  }

  publicar(){
    this.disable = true
    this.public_service.publicar_muro(this.title.value, this.body.value).subscribe({
      next:(data)=>{
        this.publicaciones = data
        this.body.setValue('')
        this.title.setValue('')
        this.disable = false
      },
      error:(error)=>{
        this.publicaciones = []
        this.disable = false
      }
    })
  }

  editar(num:string, body:string, title:string){
    this.disable_editar = true
    this.editar_num = num
    this.body_edit.setValue(body)
    this.title_edit.setValue(title)
  }

  guardar(){
    this.disable_editar = false
    this.publicaciones = []
    this.public_service.update_muro(this.title_edit.value, this.body_edit.value, this.editar_num).subscribe({
      next:(data)=>{
        this.publicaciones = data
        this.title_edit.setValue('')
        this.body_edit.setValue('')
        this.editar_num = '-1'
      },
      error:(error)=>{
        this.publicaciones = []

      }
    })
  }

  eliminar(id_publicacion:string){
    this.publicaciones = []
    this.public_service.delete_muro(id_publicacion).subscribe({
      next:(data)=>{
        this.publicaciones = data
      },
      error:(error)=>{
        this.publicaciones = []

      }
    })
  }

  
  publicaciones:Array<{title:string,body:string,last_update:string, id_publicacion:string}> = []

}
