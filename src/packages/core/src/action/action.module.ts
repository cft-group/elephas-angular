import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EAction} from './action';

@NgModule({
    declarations: [EAction],
    imports: [
        CommonModule
    ],
    exports: [EAction]
})
export class EActionModule { }
