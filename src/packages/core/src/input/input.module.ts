import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EBaseInputModule} from '../base-input';
import {EInput} from './input';

@NgModule({
    declarations: [EInput],
    imports: [
        CommonModule,
        EBaseInputModule
    ],
    exports: [EInput, EBaseInputModule]
})
export class EInputModule { }
