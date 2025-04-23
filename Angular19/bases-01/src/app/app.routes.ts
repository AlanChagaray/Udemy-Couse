import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { DragonballPageComponent} from './pages/dragonball/dragonball.component';
import { DragonballSuperPageComponent } from './pages/dragonball-super/dragonball-super.component';

export const routes: Routes = [
    {
        path: '',
        component:CounterPageComponent,
    },
    {
        path: 'hero',
        component:HeroPageComponent,
    },
    {
        path: 'dragonball',
        component:DragonballPageComponent,
    },
    {
        path: 'dragonball-super',
        component:DragonballSuperPageComponent,
    },
    {
        path: '**',         //url no valida
        redirectTo : '',
    },
];
