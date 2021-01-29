import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';
import {DataListItem} from './models';

const defaultTitleWidth: number = 172;

@Component({
    selector: 'e-datalist-item',
    templateUrl: './datalist-item.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EDatalistItem {

    @Input() public get item(): DataListItem {
        return this._item;
    }
    public set item(item: DataListItem) {
        this._item = item;
    }
    @Input() public get titleWidth(): number {
        return this._titleWidth;
    }
    public set titleWidth(titleWidth: number) {
        this._titleWidth = titleWidth || defaultTitleWidth;
    }

    private _item: DataListItem;
    private _titleWidth: number;

}
