import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EHome } from './home/home';
import { EAbout } from './about/about';
import { EDemo } from './demo';
import { EDemoRoutingModule } from './demo-routing.module';
import { ETabsModule } from '../tabs.module';

@NgModule({
    declarations: [EHome, EAbout, EDemo],
    imports: [
        CommonModule,
        RouterModule,
        EDemoRoutingModule,
        ETabsModule
    ],
    exports: [EDemo, EHome, EAbout]
})
export class EDemoModule { }
