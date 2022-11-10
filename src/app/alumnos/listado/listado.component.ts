import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listaAlumnos: string[] = ['Javi','Sergio','Pilar','Vicencius']

//   listaAlumnos = [
//     { name : 'Javi'},
//     { name : 'Sergio'},
//     { name : 'Pilar'},
//     { name : 'Vicencius'}

// ]


  ultimo: string="";

  listanueva :string[] =[]

  cambiarLista() {
    this.listanueva.push(this.listaAlumnos[this.listaAlumnos.length-1])
    this.listaAlumnos.pop()
}


}
