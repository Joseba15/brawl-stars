import { Component,EventEmitter ,Input, OnInit, Output } from '@angular/core';
import { Character } from '../interfaces/characters';
import { BSService } from '../services/brawl-stars.service';

@Component({
  selector: 'app-addcharacter',
  templateUrl: './addcharacter.component.html',
  styleUrls: ['./addcharacter.component.css']
})
export class AddcharacterComponent implements OnInit {
  
  constructor(private bsService:BSService) { 
    
  }

  ngOnInit(): void {
  }

  @Input() nuevo: Character= {name:'', health:0}
  
  
  addCharacter(){
    this.bsService.addCharacter({...this.nuevo})
    this.nuevo.name='';
    this.nuevo.health=0;
  }

}
