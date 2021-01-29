import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';
import {DataList} from './models';

@Component({
    selector: 'e-datalist',
    templateUrl: './datalist.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EDataList {

    @Input() public get data(): DataList {
        return this._data;
    }
    public set data(data: DataList) {
        this._data = data;
    }

    private _data: DataList;

}
