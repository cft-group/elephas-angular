import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EChip} from './chip';

@NgModule({
    declarations: [EChip],
    imports: [
        CommonModule
    ],
    exports: [EChip]
})
export class EChipModule { }
