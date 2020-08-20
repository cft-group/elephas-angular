import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ETextarea} from './textarea';

@NgModule({
    declarations: [ETextarea],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [ETextarea]
})
export class ETextareaModule { }
