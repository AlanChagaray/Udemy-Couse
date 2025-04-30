// snipper ==> ASERVICE

import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

// LocalStorge : usar solo para datos simples tipo String
function getFromLocalStorage() {
    const characters = localStorage.getItem('characters');

    return characters ? JSON.parse(characters) : [];
}

@Injectable({providedIn: 'root'}) // Decorador, convierte la clase en un servicio

// La inyeccion de dependencias es una forma de proporcionar 
// instancias de clases a otras clases en Angular.

export class DragonBallService {
    characters = signal<Character[]>(getFromLocalStorage());
    // characters = signal<Character[]>([
    //     {id: 1, name: 'Goku', power: 9000},
    //     {id: 2, name: 'Vegeta', power: 8500}
    //   ]);

      saveToLocalStorage =
        effect(() => {
          localStorage.setItem('characters', JSON.stringify(this.characters()));
        });
    
      addCharacter(character : Character) {
        this.characters.update((list)=>[... list, character]);
      }
}