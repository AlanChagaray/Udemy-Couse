import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { GifService } from '@app/gifs/sevices/gifs.service';
import { map } from 'rxjs';
import { GifListComponent } from "../../components/gif-list/gif-list.component";

@Component({
  selector: 'app-',
  imports: [GifListComponent],
  templateUrl: './gif-history.component.html',
})

export default class GifHistoryComponent {

  gifService = inject(GifService); // Inyectando el servicio de gifs
  // transformando el observable de ActivatedRoute.params a una señal
  // para que se pueda usar en la plantilla
  // toSignal es una función que convierte un observable en una señal
  // y permite que se actualice automáticamente cuando el observable emite un nuevo valor
  // inject permite inyectar dependencias en el componente
  // ActivatedRoute.params es un observable que emite los parámetros de la ruta actual
  query = toSignal(inject(ActivatedRoute).params.pipe( map( (params) => params['key'] || '')) );

  gifsByKey = computed(() => {
    return this.gifService.searchGifsHistory(this.query());
  });

}
