import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragon-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
})

export class CharacterAddComponent {

  name = signal('');
  power = signal(0);

  newCharacter = output<Character>(); // Evento, va a emitir algo de tipo <Character>

  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9000},
    {id: 2, name: 'Vegeta', power: 8500},
    // {id: 4, name: 'Yamcha', power: 500},
    // {id: 4, name: 'Piccolo', power: 6000},
  ]);

  addCharacter() {

    if(!this.name() || !this.power() || this.power() <= 0) return;

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    }
    // this.characters().push(newCharacter);
    // this.characters.update((list)=>[... list, newCharacter]);
    this.newCharacter.emit(newCharacter); // emite el nuevo personaje
    this.resetForm();
  }

  resetForm() {
    this.name.set('');
    this.power.set(0);
  }
 }
