import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EBaseInput } from './base-input';

@NgModule({
    declarations: [EBaseInput],
    imports: [
        CommonModule
    ],
    exports: [EBaseInput]
})
export class EBaseInputModule { }
