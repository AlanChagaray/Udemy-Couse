import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@Component({  // Decorador, convierte la clase en un componente
  selector: 'app-root', // Etiqueta HTML que se usará para el componente
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'bases-01';
}
