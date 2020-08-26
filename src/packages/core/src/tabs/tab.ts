import {Component, Input, TemplateRef, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'e-tab',
    templateUrl: './tab.html',
    encapsulation: ViewEncapsulation.None
})
export class ETab {

    @Input() public tabIndex: number;
    /**
     * Tab selected state.
     */
    @Input() public selected: boolean = false;

    /**
     * Router link.
     */
    @Input() public routerLink: string | string[];

    /**
     * Router query params (model: {[k: string]: string}).
     */
    @Input() public queryParams: { [k: string]: string };

    /**
     * Plain text title for the tab.
     */
    @Input() public set title(value: string | TemplateRef<any>) {
        if (value instanceof TemplateRef) {
            this.titleTpl = value;
        } else {
            this.titleStr = value;
        }
    }
    /**
     * Text title for the tab.
     * @internal
     */
    public titleStr: string;
    /**
     * Template title for the tab.
     * @internal
     */
    public titleTpl: TemplateRef<any>;

}
