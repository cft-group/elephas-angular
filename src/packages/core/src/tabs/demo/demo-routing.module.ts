import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EHome} from './home/home';
import {EAbout} from './about/about';

const routes: Routes = [
    {
        path: 'home',
        component: EHome
    },
    {
        path: 'about',
        component: EAbout
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class EDemoRoutingModule { }
