import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Observable, Subscription, timer} from 'rxjs';
import {SnackbarConfig} from './models';

const interval: number = 1000;
const defaultDuration: number = 10;

@Component({
    selector: 'e-snackbar',
    templateUrl: './snackbar.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ESnackbar implements OnInit, OnDestroy {

    @Input() public config: SnackbarConfig;
    @Output() public close: EventEmitter<boolean> = new EventEmitter<boolean>();
    /**
     * @internal
     */
    public count: number;
    /**
     * @internal
     */

    private subs: Subscription;

    constructor(private cdr: ChangeDetectorRef) { }

    public ngOnInit(): void {
        if (this.config) {
            this.count = this.config.duration || defaultDuration;
            this.initTimer();
        }
    }

    public ngOnDestroy(): void {
        if (this.subs) {
            this.subs.unsubscribe();
        }
    }

    /**
     * @internal
     */
    public onClose(): void {
        this.close.emit(true);
    }

    /**
     * @internal
     */
    public initTimer(): void {
        const timerSource: Observable<number> = timer(interval, interval);
        this.subs = timerSource.subscribe((): void => {
            if (this.count) {
                this.count--;
                this.cdr.detectChanges();
            } else {
                this.close.emit(false);
            }
        });
    }

}
