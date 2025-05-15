import type { Gif } from "../interfaces/gif.interface";
import type { GiphyItem } from "../interfaces/giphy.interfaces";



export class GifMapper{

    static mapGiphyItemToGit(item: GiphyItem): Gif{
        return {
            id: item.id,
            title: item.title,
            url: item.images.original.url
        }
    }

    static mapGiphyItemsToGifs(items: GiphyItem[]): Gif[]{
        return items.map(item => this.mapGiphyItemToGit(item));
    }
}