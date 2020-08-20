import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EInfo} from './info';

@NgModule({
    declarations: [EInfo],
    imports: [
        CommonModule
    ],
    exports: [EInfo]
})
export class EInfoModule { }
