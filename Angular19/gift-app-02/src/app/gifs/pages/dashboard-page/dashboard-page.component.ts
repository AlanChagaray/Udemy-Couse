import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteMenuComponent } from '../../components/site-menu/site-menu.component';

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, SiteMenuComponent],
  templateUrl: './dashboard-page.component.html'
})
export default class DashboardPageComponent { }
