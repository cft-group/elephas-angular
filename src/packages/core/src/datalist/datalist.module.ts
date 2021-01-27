import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PortalModule} from '@angular/cdk/portal';
import {EDataList} from './datalist';
import {EDatalistItem} from './datalist-item';
import {EDatalistContent} from './datalist-content';
import {EDataListSanitizer} from './datalist-sanitizer';

@NgModule({
    declarations: [EDataList, EDatalistItem, EDatalistContent, EDataListSanitizer],
    imports: [
        CommonModule,
        PortalModule
    ],
    exports: [EDataList, EDatalistItem, EDatalistContent, EDataListSanitizer]
})
export class EDataListModule { }
