import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EMenu} from './menu';
import {EMenuItem} from './menu-item';

@NgModule({
    declarations: [EMenu, EMenuItem],
    imports: [
        CommonModule
    ],
    exports: [EMenu, EMenuItem]
})
export class EMenuModule { }
