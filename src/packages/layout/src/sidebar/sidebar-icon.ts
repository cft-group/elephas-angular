import {AfterViewInit, Directive, EmbeddedViewRef, OnInit, Renderer2, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[eSidebarIcon]'
})
export class ESidebarIcon implements OnInit, AfterViewInit {

    private embeddedViewRef: EmbeddedViewRef<any>;

    constructor(
        private renderer: Renderer2,
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef
    ) {
    }

    public ngOnInit(): void {
        this.embeddedViewRef = this.viewContainer.createEmbeddedView(this.templateRef, {});
    }

    public ngAfterViewInit(): void {
        if (this.embeddedViewRef.rootNodes[0]) {
            this.renderer.addClass(this.embeddedViewRef.rootNodes[0], '_e_sidebar-item__icon');
        }
    }
}
