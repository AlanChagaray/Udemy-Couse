import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";


@Component({
    templateUrl: './hero-page.component.html',
    imports: [UpperCasePipe],
})

export class HeroPageComponent {
    name = signal('Ironman'); 
    age = signal(45);

    nameCapitalize = computed( ()=>{
        return this.name().toUpperCase(); // Convierte el nombre del héroe a mayúsculas
    })

    getHeroDescription() {
        return `${this.name()} - ${this.age()}`; // Llamar a la señal como una función para obtener su valor
    }

    changeHero() {
        if(this.name() === 'Ironman'){
            this.name.set('Spiderman');
            this.age.set(22); 
        }else{
            this.name.set('Ironman');
            this.age.set(45); 
        }
    }

    resetForm() {
        this.name.set('Ironman'); // Reinicia el nombre del héroe
        this.age.set(45); // Reinicia la edad del héroe
    }

    changeAge() {
        this.age.set(65); // Cambia la edad del héroe
    }

    // nameCapitalize(){
    //     return this.name().toUpperCase(); // Convierte el nombre del héroe a mayúsculas
    // }

}