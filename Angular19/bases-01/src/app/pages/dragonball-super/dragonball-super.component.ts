import { Component, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-super.component.html',
})
export class DragonballSuperPageComponent {
  
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9000},
    {id: 2, name: 'Vegeta', power: 8500},
    // {id: 4, name: 'Yamcha', power: 500},
    // {id: 4, name: 'Piccolo', power: 6000},
  ]);

  addCharacter(character : Character) {
    this.characters.update((list)=>[... list, character]);
  }

  resetForm() {
    this.name.set('');
    this.power.set(0);
  }

}
