import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EBadge } from './badge';

@NgModule({
    declarations: [EBadge],
    imports: [
        CommonModule
    ],
    exports: [EBadge]
})
export class EBadgeModule { }
