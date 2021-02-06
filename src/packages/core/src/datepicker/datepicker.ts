import { ChangeDetectionStrategy, Component, HostBinding, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'e-datepicker',
    templateUrl: './datepicker.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EDatepicker implements OnChanges {

    @Input() public get locale(): string {
        return this._locale;
    }
    public set locale(locale: string) {
        this._locale = locale;
    }

    @Input() public get date(): Date {
        return this._date;
    }
    public set date(date: Date) {
        this._date = date;
    }

    @HostBinding('class._e_datepicker__box') public datepickerClass: boolean = true;

    private _locale: string = 'ru';
    private _date: Date = new Date();

    constructor() { }

    public ngOnChanges(changes: SimpleChanges): void {
    }

}
