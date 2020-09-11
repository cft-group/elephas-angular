import {Injectable, ComponentRef} from '@angular/core';
import {Overlay, OverlayRef} from '@angular/cdk/overlay';
import {ComponentPortal} from '@angular/cdk/portal';
import {Subscription, Subject, Observable} from 'rxjs';
import {ESnackbar} from './snackbar';
import {SnackbarConfig} from './models';

@Injectable()
export class ESnackbarService {

    private snackbarRef: ComponentRef<ESnackbar>;
    private close: Subject<void> = new Subject<void>();

    constructor(private overlay: Overlay) {
    }

    public open(config: SnackbarConfig): void {
        if (!this.snackbarRef) {
            const overlayRef: OverlayRef = this.overlay.create({
                positionStrategy: this.overlay.position().global().centerHorizontally().centerHorizontally()
            });

            const containerPortal: ComponentPortal<ESnackbar> =  new ComponentPortal(ESnackbar);

            this.snackbarRef = overlayRef.attach(containerPortal);
            this.snackbarRef.instance.config = config;

            const subs: Subscription = this.snackbarRef.instance.close.subscribe((manuallyClosed: boolean): void => {
                overlayRef.detach();
                this.snackbarRef.destroy();
                this.snackbarRef = null;
                if (manuallyClosed) {
                    this.close.next();
                }
                subs.unsubscribe();
            });
        }
    }

    public afterClose(): Observable<void> {
        return this.close.asObservable();
    }

}
