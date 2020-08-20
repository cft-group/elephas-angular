import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ECheckbox} from './checkbox';

@NgModule({
    declarations: [ECheckbox],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [ECheckbox]
})
export class ECheckboxModule { }
