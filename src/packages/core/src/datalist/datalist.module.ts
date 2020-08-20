import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PortalModule} from '@angular/cdk/portal';
import {EDataList} from './datalist';
import {EDatalistItem} from './datalist-item';
import {EDatalistContent} from './datalist-content';
import {EDataListPipe} from './datalist.pipe';

@NgModule({
    declarations: [EDataList, EDatalistItem, EDatalistContent, EDataListPipe],
    imports: [
        CommonModule,
        PortalModule
    ],
    exports: [EDataList, EDatalistItem, EDatalistContent, EDataListPipe]
})
export class EDataListModule { }
