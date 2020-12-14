import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Observable, Subscription, timer} from 'rxjs';
import {SnackbarAnimation} from './snackbar.animation';
import {SnackbarConfig} from './models';

const interval: number = 1000;
const defaultDuration: number = 10;
const countPadding: number = 2;

@Component({
    selector: 'e-snackbar',
    templateUrl: './snackbar.html',
    animations: [SnackbarAnimation.hideSnackbar],
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
    public paddedCount: string;
    /**
     * @internal
     */
    public animationState: 'visible' | 'hidden' = 'hidden';

    private manuallyClosed: boolean = false;
    private subs: Subscription;

    constructor(private cdr: ChangeDetectorRef) { }

    public ngOnInit(): void {
        if (this.config) {
            this.count = this.config.duration || defaultDuration;
            this.paddedCount = this.count.toString().padStart(countPadding, '0');
            this.animationState = 'visible';
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
        this.animationState = 'hidden';
        this.manuallyClosed = true;
    }

    /**
     * @internal
     */
    public onAnimationEnd(): void {
        if (this.animationState === 'hidden') {
            this.close.emit(this.manuallyClosed);
        }
    }

    /**
     * @internal
     */
    public initTimer(): void {
        const timerSource: Observable<number> = timer(interval, interval);
        this.subs = timerSource.subscribe((): void => {
            if (this.count) {
                this.count--;
                this.paddedCount = this.count.toString().padStart(countPadding, '0');
            } else {
                this.animationState = 'hidden';
            }
            this.cdr.markForCheck();
        });
    }

}
