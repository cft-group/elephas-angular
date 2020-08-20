import {Component, Input, ViewEncapsulation} from '@angular/core';
import {DataListItem} from './models';

@Component({
    selector: 'e-datalist-item',
    templateUrl: './datalist-item.html',
    encapsulation: ViewEncapsulation.None
})
export class EDatalistItem {

    @Input() public item: Partial<DataListItem>;
    @Input() public titleWidth: number = 172;

}
