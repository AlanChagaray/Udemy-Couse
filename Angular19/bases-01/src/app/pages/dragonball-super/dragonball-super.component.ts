import { Component, inject } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";
import { DragonBallService } from '../../services/dragonball.service';


@Component({
  selector: 'dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-super.component.html',
})
export class DragonballSuperPageComponent {

  // Se inyecta el servicio DragonBallService en el componente
  public dragonballService = inject(DragonBallService);
  
  // characters = signal<Character[]>([
  //   {id: 1, name: 'Goku', power: 9000},
  //   {id: 2, name: 'Vegeta', power: 8500},
  // ]);

  // addCharacter(character : Character) {
  //   this.characters.update((list)=>[... list, character]);
  // }

}
