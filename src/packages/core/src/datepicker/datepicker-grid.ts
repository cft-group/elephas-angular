import { ChangeDetectionStrategy, Component, HostBinding, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import * as moment from 'moment';

const weekDaysLength: number = 6;

@Component({
    selector: 'e-datepicker-grid',
    templateUrl: './datepicker-grid.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EDatepickerGrid implements OnChanges {

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

    @HostBinding('class._e_dpcal__grid') public datepickerGridClass: boolean = true;

    public nameOfDays: string[] = [];
    public days: number[] = [];

    private _locale: string;
    private _date: Date;

    constructor() { }

    public ngOnChanges(changes: SimpleChanges): void {
        if (this.locale && 'locale' in changes) {
            this.generateNameOfDays();
        }
        if (this.date && 'date' in changes) {
            this.generateDays();
        }
    }

    private generateDays(): void {
        const date: moment.Moment = moment(new Date(this.date.getFullYear(), this.date.getMonth(), 1));

        const firstDayInMonth: moment.Moment = date.startOf('month');
        const initialEmptyCells: number = firstDayInMonth.weekday();
        const lastDayInMonth: moment.Moment = date.endOf('month');
        const lastEmptyCells: number = weekDaysLength - lastDayInMonth.weekday();
        const daysInMonth: number = date.daysInMonth();
        const monthCellsCount: number = initialEmptyCells + lastEmptyCells + daysInMonth;

        for (let i: number = 0; i < monthCellsCount; i++) {
            let day: number;
            if (i < initialEmptyCells || i > initialEmptyCells + daysInMonth - 1) {
                day = 0;
            } else {
                day = i - initialEmptyCells + 1;
            }
            this.days.push(day);
        }
    }

    private generateNameOfDays(): void {
        const daysNumber: number[] = [].constructor(weekDaysLength) as number[];
        for (let i: number = 0; i <= daysNumber.length; i++) {
            this.nameOfDays.push(moment().weekday(i).format('ddd'));
        }
    }

}
