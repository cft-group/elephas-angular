import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ObserversModule} from '@angular/cdk/observers';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {EDropdown} from './dropdown';
import {EDropdownItem} from './dropdown-item';
import {EDropdownTriggers} from './dropdown-triggers';

@NgModule({
    declarations: [EDropdown, EDropdownItem, EDropdownTriggers],
    imports: [
        CommonModule,
        ObserversModule,
        PerfectScrollbarModule
    ],
    exports: [EDropdown, EDropdownItem, EDropdownTriggers]
})
export class EDropdownModule { }
