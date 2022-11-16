import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { CharacterComponent } from './character/character.component';
import { AddcharacterComponent } from './addcharacter/addcharacter.component';
import { BSService } from './services/brawl-stars.service';



@NgModule({
  declarations: [
    MainPageComponent,
    CharacterComponent,
    AddcharacterComponent
  ],
  exports:[
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[
    BSService
  ]
})


export class BrawlStarsModule { }
