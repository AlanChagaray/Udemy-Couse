import { AfterViewInit, Component, ElementRef, inject, viewChild } from '@angular/core';
import { GifService } from '@app/gifs/sevices/gifs.service';
import { ScrollStateService } from '@app/shared/services/scroll-state.service';

@Component({
  selector: 'app-treding-page',
  templateUrl: './treding-page.component.html'
})
export default class TredingPageComponent implements AfterViewInit { 
  
  gifService = inject(GifService);
  scrollStateService = inject(ScrollStateService);
  scrollDivRefer = viewChild<ElementRef<HTMLDivElement>>('groupDiv');

  ngAfterViewInit(): void {
    const scrollDiv = this.scrollDivRefer()?.nativeElement;
    if(!scrollDiv) return;
    
    scrollDiv.scrollTop = this.scrollStateService.tredingScrollState(); // Restaurar la posición del scroll
  }


  onScroll(event : Event) {
    const scrollDiv = this.scrollDivRefer()?.nativeElement;
    if(!scrollDiv) return;
    
    // Obteniendo las propiedades de scroll del div
    // scrollTop: posición del scroll en el eje Y
    // clientHeight: altura visible del div
    // scrollHeight: altura total del contenido del div
    const scrollTop = scrollDiv.scrollTop;
    const clientHeight = scrollDiv.clientHeight;
    const scrollHeight = scrollDiv.scrollHeight;

    debugger;
    // Verificando si el scroll está cerca del final del div
    const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight;
    this.scrollStateService.tredingScrollState.set(scrollTop); // Guardar la posición del scroll
    if(isAtBottom){
      // Si está cerca del final, cargamos más gifs
      this.gifService.loadTradingGifs();
    }
  }

}
