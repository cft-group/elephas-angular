import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EHeading} from './heading';
import {EHeadingActions} from './heading-actions';

@NgModule({
    declarations: [EHeading, EHeadingActions],
    imports: [
        CommonModule
    ],
    exports: [EHeading, EHeadingActions]
})
export class EHeadingModule { }
