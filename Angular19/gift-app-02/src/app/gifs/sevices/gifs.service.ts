import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { map, Observable, tap } from 'rxjs';
import { GifMapper } from '../mapper/gif.mapper';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import type { Gif } from '../interfaces/gif.interface';


function getFromLocalStorage() {
    const history = localStorage.getItem('searchHistory');
    return history ? JSON.parse(history) : {}; 
}

@Injectable({providedIn: 'root'})

export class GifService {

    private http = inject(HttpClient);

    tredingGifs = signal<Gif[]>([]);
    tredingGifsLoading = signal(false);
    private tredingPage = signal(0);

    tredingGifGroup = computed <Gif[][]> (() => {
        const groups = [];
        for (let i = 0; i < this.tredingGifs().length; i += 3) {
            groups.push(this.tredingGifs().slice(i, i + 3));
        }
        return groups;
    })
    // Usando signal para manejar el historial de búsqueda
    // signal permite crear una señal reactiva que se actualiza automáticamente
    searchHistory = signal<Record<string, Gif[]>>( getFromLocalStorage() ?? {});
    // Obteniendo las claves del historial de búsqueda como una señal computada
    searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

    // Efecto que se ejecuta cada vez que cambia el historial de búsqueda
    saveToLocalStorage =effect(() => {
            localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory()));
        });

    constructor() {
        this.loadTradingGifs();
     }

     // Método para cargar gifs de tendencia desde Giphy
    loadTradingGifs() {

        if( this.tredingGifsLoading()) return; // Evita múltiples llamadas

        this.tredingGifsLoading.set(true); // Indicador de carga

        this.http.get<GiphyResponse>(`${ environment.giphyUrl}/gifs/trending`, {
            params:{
                api_key: environment.giphyApiKey,
                limit: 20,
                offset: this.tredingPage() * 20 // Paginación
            }
        }).subscribe((resp)=>{
            const gifs = GifMapper.mapGiphyItemsToGifs(resp.data);
            this.tredingGifs.update((currentGifs) => [...currentGifs, ...gifs]);
            this.tredingPage.update(page => page + 1); // Incrementa la página para la próxima carga
            this.tredingGifsLoading.set(false);
            // console.log(gifs);
        });
    }

    // Método para buscar gifs en Giphy
    searchGifs(query: string) : Observable<Gif[]> {
        return this.http.get<GiphyResponse>(`${ environment.giphyUrl}/gifs/search`, {
            params:{
                api_key: environment.giphyApiKey,
                limit: 20,
                q: query
            }
        }).pipe( // Permite el uso de operadores de RxJS - map, tap, etc.
            map( ({data}) => data),
            map( (items) => GifMapper.mapGiphyItemsToGifs(items)),
            // Historial de búsqueda
            tap((items) => {
                this.searchHistory.update( (history) => ({
                    ...history,
                    [query.toLowerCase()]: items
                }))
            })
        )
    }

    // Método para buscar gifs en el historial de búsqueda
    searchGifsHistory(key : string ) : Gif[] {
        return this.searchHistory()[key] || [];
    }
}