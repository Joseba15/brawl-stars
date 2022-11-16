import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../interfaces/characters';
import { BSService } from '../services/brawl-stars.service';



@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  //characters :Character[] = []
  constructor(private bsService :BSService) { 
    //this.characters=this.bsService.personajes;


  }

  ngOnInit(): void {
  }

  get  character():Character []{
    return this.bsService.personajes
  }

}
