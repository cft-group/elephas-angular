import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ESpinner} from './spinner';

@NgModule({
    declarations: [ESpinner],
    imports: [
        CommonModule
    ],
    exports: [ESpinner]
})
export class ESpinnerModule { }
