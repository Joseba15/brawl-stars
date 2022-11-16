import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../interfaces/characters';

@Component({
  selector: 'app-addcharacter',
  templateUrl: './addcharacter.component.html',
  styleUrls: ['./addcharacter.component.css']
})
export class AddcharacterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  addCharacter(){
    let personaje{
      @Input nuevo: Character= {name:'', health:0}
    
      @Input personajes: Character[]=[]
      let add={name:this.nuevo.name, health: this.nuevo.health}


    }
    
    this.characters.push(this.personaje)
  
  }

}
