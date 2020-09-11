import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Observable, Subscription, timer} from 'rxjs';
import {SnackbarAnimation} from './snackbar.animation';
import {SnackbarConfig} from './models';

const interval: number = 1000;
const defaultDuration: number = 10;

@Component({
    selector: 'e-snackbar',
    templateUrl: './snackbar.html',
    animations: [SnackbarAnimation.fadeSnackbar],
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
    public animationState: 'fadeIn' | 'fadeOut' = 'fadeOut';

    private manuallyClosed: boolean = false;
    private subs: Subscription;

    constructor(private cdr: ChangeDetectorRef) { }

    public ngOnInit(): void {
        if (this.config) {
            this.count = this.config.duration || defaultDuration;
            this.animationState = 'fadeIn';
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
        this.animationState = 'fadeOut';
        this.manuallyClosed = true;
    }

    /**
     * @internal
     */
    public onAnimationEnd(): void {
        if (this.animationState === 'fadeOut') {
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
            } else {
                this.animationState = 'fadeOut';
            }
            this.cdr.markForCheck();
        });
    }

}
