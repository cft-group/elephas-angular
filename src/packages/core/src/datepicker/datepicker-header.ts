import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'e-datepicker-header',
    templateUrl: './datepicker-header.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EDatepickerHeader implements OnInit {

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

    @HostBinding('class._e_dpcal__header') public headerClass: boolean = true;

    private _locale: string;
    private _date: Date;

    constructor() { }

    public ngOnInit(): void {
    }

}
