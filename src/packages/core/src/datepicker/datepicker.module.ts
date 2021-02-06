import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EDatepicker} from './datepicker';
import {EDatepickerHeader} from './datepicker-header';
import {EDatepickerGrid} from './datepicker-grid';

@NgModule({
    declarations: [EDatepicker, EDatepickerHeader, EDatepickerGrid],
    imports: [
        CommonModule
    ],
  exports: [EDatepicker, EDatepickerHeader, EDatepickerGrid]
})
export class EDatepickerModule { }
