import {Component} from '@angular/core';    

@Component({

    selector: 'app-contador',
    templateUrl: './contador.component.html'

})


export class ContadorComponent {
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