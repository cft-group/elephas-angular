import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EBaseInputModule} from '../base-input/base-input.module';
import {ESelect} from './select';

@NgModule({
    declarations: [ESelect],
    imports: [
        CommonModule,
        EBaseInputModule
    ],
    exports: [ESelect, EBaseInputModule]
})
export class ESelectModule { }
