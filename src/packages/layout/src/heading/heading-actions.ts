import {
    AfterViewInit,
    Directive,
    EmbeddedViewRef,
    Input,
    OnInit,
    Renderer2,
    TemplateRef,
    ViewContainerRef
} from '@angular/core';

@Directive({
    selector: '[eHeadingActions]'
})
export class EHeadingActions implements OnInit, AfterViewInit {

    @Input('eHeadingActions') public props: [ string, HTMLDivElement ];

    private className: string;
    private parent: HTMLDivElement;
    private embeddedViewRef: EmbeddedViewRef<any>;

    constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef, private renderer: Renderer2) { }

    public ngOnInit(): void {
        this.embeddedViewRef = this.viewContainer.createEmbeddedView(this.templateRef, {});
        this.className = this.props[0];
        if (this.props[1]) {
            this.parent = this.props[1];
        }
    }

    public ngAfterViewInit(): void {
        if (this.embeddedViewRef.rootNodes[0] && (<HTMLElement>this.embeddedViewRef.rootNodes[0]).classList) {
            this.renderer.addClass(this.embeddedViewRef.rootNodes[0], this.className);
            if (this.parent) {
                this.parent.classList.add('_e_heading__main_inline-actions');
            }
        }
    }
}
