import {Component, Input, ViewEncapsulation} from '@angular/core';
import {DataList} from './models';

@Component({
    selector: 'e-datalist',
    templateUrl: './datalist.html',
    encapsulation: ViewEncapsulation.None
})
export class EDataList {

    @Input() public data: DataList;

}
