import { Component, signal } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dragonball',
  imports: [],
  templateUrl: './dragonball.component.html',
})
export class DragonballPageComponent {
  
  name = signal('Gohan');
  power = signal(5000);

  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9000},
    {id: 2, name: 'Vegeta', power: 8500},
    {id: 4, name: 'Yamcha', power: 500},
    {id: 4, name: 'Piccolo', power: 6000},
  ]);

  addCharacter() {

    if(!this.name() || !this.power() || this.power() <= 0) return;

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    }
    // this.characters().push(newCharacter);
    this.characters.update((list)=>[... list, newCharacter]);
    this.resetForm();
  }

  resetForm() {
    this.name.set('');
    this.power.set(0);
  }

}
