import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { GifMapper } from '../mapper/gif.mapper';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import type { Gif } from '../interfaces/gif.interface';
import { map, tap } from 'rxjs';

@Injectable({providedIn: 'root'})

export class GifService {

    private http = inject(HttpClient);

    tredingGifs = signal<Gif[]>([]);
    tredingGifsLoading = signal(true);

    constructor() {
        this.loadTradingGifs();
     }


    loadTradingGifs() {
        this.http.get<GiphyResponse>(`${ environment.giphyUrl}/gifs/trending`, {
            params:{
                api_key: environment.giphyApiKey,
                limit: 20,
            }
        }).subscribe((resp)=>{
            const gifs = GifMapper.mapGiphyItemsToGifs(resp.data);
            this.tredingGifs.set(gifs);
            this.tredingGifsLoading.set(false);
            console.log(gifs);
        });
    }

    searchGifs(query: string) {
        return this.http.get<GiphyResponse>(`${ environment.giphyUrl}/gifs/search`, {
            params:{
                api_key: environment.giphyApiKey,
                limit: 20,
                q: query
            }
        }).pipe(
            map( ({data}) => data),
            map( (items) => GifMapper.mapGiphyItemsToGifs(items))
        )
        // .subscribe((resp)=>{
        //     const gifs = GifMapper.mapGiphyItemsToGifs(resp.data);
        //     console.log({search:gifs});
        // })
    }
}