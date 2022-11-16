import { Injectable } from "@angular/core";
import { Character } from '../interfaces/characters';



@Injectable()
export class BSService{


    private _personajes = [
        { name : 'Shelly', health:3600 },
        { name : 'Nita', health:3800 },
        { name : 'Colt', health:2800 },
        { name : 'Franky', health:900 }
    ]


    constructor(){
        console.log('Servicio iniciado');
        
    }

    get personajes():Character[]{
        
        return [...this._personajes]; 
    }

    
    addCharacter(character:Character){
        this._personajes.push(character);
    }

    delCharacter (nombrePersonaje:Character){
        this._personajes=  this._personajes.filter( perso => perso.name!=nombrePersonaje.name);
    }

}