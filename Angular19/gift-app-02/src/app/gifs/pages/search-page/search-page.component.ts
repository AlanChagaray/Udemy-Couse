import { Component, inject, signal } from '@angular/core';
import { GifListComponent } from "../../components/gif-list/gif-list.component";
import { GifService } from '@app/gifs/sevices/gifs.service';
import type { Gif } from '@app/gifs/interfaces/gif.interface';

@Component({
  selector: 'app-search-page',
  imports: [GifListComponent],
  templateUrl: './search-page.component.html'
})
export default class SearchPageComponent { 

  gifService = inject(GifService);
  gifs= signal<Gif[]>([]);

  onSearch(query: string) {
    this.gifService.searchGifs(query).subscribe((resp) => {
        this.gifs.set(resp);
    }); 
  }
}
