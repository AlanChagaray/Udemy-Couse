import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuOptions } from '@app/gifs/interfaces/menuoptions.interface';
import { GifService } from '@app/gifs/sevices/gifs.service';

@Component({
  selector: 'app-site-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './site-menu-options.component.html'
})
export class SiteMenuOptionsComponent { 

  // Inyectando el servicio de gifs
  gifService = inject(GifService);

  menuOptions : MenuOptions[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Treding',
      subLabel: 'Populars gifs',
      route: '/dashboard/treding'
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Search',
      subLabel: 'Search for gifs',
      route: '/dashboard/search'
    },
  ]
};
