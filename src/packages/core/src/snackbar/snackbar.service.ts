import {Injectable, ComponentRef, ComponentFactoryResolver, Injector, Inject, ComponentFactory, RendererFactory2, Renderer2} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {Subscription, Subject, Observable} from 'rxjs';
import {ESnackbar} from './snackbar';
import {SnackbarConfig} from './models';

@Injectable()
export class ESnackbarService {

    private componentRef: ComponentRef<ESnackbar>;
    private close: Subject<void> = new Subject<void>();
    private readonly renderer: Renderer2;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private injector: Injector,
        private rendererFactory: RendererFactory2,
        @Inject(DOCUMENT) private document: Document
    ) {
        this.renderer = this.rendererFactory.createRenderer(null, null);
    }

    public open(config: SnackbarConfig): void {
        if (!this.componentRef) {
            const factory: ComponentFactory<ESnackbar> = this.componentFactoryResolver.resolveComponentFactory(ESnackbar);
            this.componentRef = factory.create(this.injector);

            this.componentRef.instance.config = config;
            this.componentRef.hostView.detectChanges();

            const nativeElement: HTMLElement = this.componentRef.location.nativeElement;

            this.renderer.appendChild(this.document.body, nativeElement);

            const subs: Subscription = this.componentRef.instance.close.subscribe((isManuallyClosed: boolean): void => {
                this.componentRef.destroy();
                this.componentRef = null;
                this.renderer.removeChild(this.document.body, nativeElement);
                if (isManuallyClosed) {
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
