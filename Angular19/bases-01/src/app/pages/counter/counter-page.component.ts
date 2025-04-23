import { ChangeDetectionStrategy, Component, signal } from '@angular/core';


@Component({
    templateUrl: './counter-page.component.html',
    // changeDetection: ChangeDetectionStrategy.OnPush, // Cambia la estrategia de detección de cambios a OnPush (Zonelees)
})



export class CounterPageComponent{  
    init: number = 10;
    counter : number = this.init;

    counterSignal = signal(10); // Señal que se puede escribir 

    constructor(){
        // setInterval(() => {
            // this.counter += 1; // Incrementa el contador cada 2 segundos
            // this.counterSignal.update(current => current + 1); // Incrementa la señal cada 2 segundos
        // }, 2000);
    }

    increaseBy(value: number){
        this.counter += value;
        this.counterSignal.update(current => current + value); // Actualiza la señal
    }
    decreaseBy(value: number){
        this.counter -= value;
        this.counterSignal.update(current => current - value); // Actualiza la señal
    }
    reset(){
        this.counter = this.init;
        this.counterSignal.set(0); // Reinicia la señal a 0
    }
}