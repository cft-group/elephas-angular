import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ETag } from './tag';

@NgModule({
    declarations: [ETag],
    imports: [
        CommonModule
    ],
    exports: [ETag]
})
export class ETagModule { }
