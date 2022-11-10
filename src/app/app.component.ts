import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'Contador';
  base : number = 10;
  contador : number =0;

  incrementar() {
    this.contador+=this.base;
  }

  decrementar() {
    this.contador-=this.base;
  }

  aggregate(value :number){
    this.contador += value;
  }

}
