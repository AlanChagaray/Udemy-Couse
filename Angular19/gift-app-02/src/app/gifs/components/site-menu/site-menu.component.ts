import { Component } from '@angular/core';
import { SiteMenuHeaderComponent } from './site-menu-header/site-menu-header.component';
import { SiteMenuOptionsComponent } from './site-menu-options/site-menu-options.component';

@Component({
  selector: 'app-site-menu',
  imports: [SiteMenuHeaderComponent,SiteMenuOptionsComponent],
  templateUrl: './site-menu.component.html'
})
export class SiteMenuComponent { }
