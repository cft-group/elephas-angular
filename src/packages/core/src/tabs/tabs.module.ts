import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ETabs} from './tabs';
import {ETab} from './tab';
import {ETabTitle} from './tab-title';

@NgModule({
    declarations: [ETabs, ETab, ETabTitle],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [ETabs, ETab, ETabTitle]
})
export class ETabsModule { }
