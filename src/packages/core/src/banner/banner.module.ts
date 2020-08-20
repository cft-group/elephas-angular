import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EBanner } from './banner';

@NgModule({
    declarations: [EBanner],
    imports: [
        CommonModule
    ],
    exports: [EBanner]
})
export class EBannerModule { }
