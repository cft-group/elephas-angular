import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EHeader} from './header';
import {EHeaderLeft} from './header-left';
import {EHeaderRight} from './header-right';
import {EHeaderAction} from './header-action';

@NgModule({
    declarations: [EHeader, EHeaderLeft, EHeaderRight, EHeaderAction],
    imports: [
        CommonModule
    ],
    exports: [EHeader, EHeaderLeft, EHeaderRight, EHeaderAction]
})
export class EHeaderModule { }
