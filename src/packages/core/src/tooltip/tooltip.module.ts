import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ETooltip } from './tooltip';

@NgModule({
    declarations: [ETooltip],
    imports: [
        CommonModule
    ],
    exports: [ETooltip]
})
export class ETooltipModule { }
