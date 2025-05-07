import { Component } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-site-menu-header',
  imports: [],
  templateUrl: './site-menu-header.component.html'
})
export class SiteMenuHeaderComponent {
  envs = environment
}
