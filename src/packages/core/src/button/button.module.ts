import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EButton } from './button';

@NgModule({
    declarations: [EButton],
    imports: [
        CommonModule
    ],
    exports: [EButton]
})
export class EButtonModule { }
