import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/characters';
import { BSService } from '../services/brawl-stars.service';
@Component({  
  selector: 'app-main-page',
  templateUrl: 'main-page.component.html',
  styleUrls: ['main-page.component.css']
})
export class MainPageComponent implements OnInit {
  constructor() {
  
   }

  ngOnInit(): void {
  }

  nuevo={
    name:"",
    health :0
  }

  

  

 
  

}
