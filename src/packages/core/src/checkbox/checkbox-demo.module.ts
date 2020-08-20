import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ECheckbox} from './checkbox';
import {EButtonModule} from '../button';
import {ECheckboxDemo} from './checkbox-demo';
import {ECheckboxModule} from './checkbox.module';

@NgModule({
    declarations: [ECheckboxDemo],
    entryComponents: [ECheckbox],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ECheckboxModule,
        EButtonModule
    ],
    exports: [ECheckboxDemo]
})
export class ECheckboxDemoModule { }
