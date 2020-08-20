import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
    selector: '[eBreadcrumbItem]'
})
export class EBreadcrumbItem {

    /**
     * Passive item flag.
     */
    @Input() public isPassive: boolean = false;

    @HostBinding('class._e_breadcrumbs__item_passive') private get passiveItem(): boolean {
        return this.isPassive;
    }

    @HostBinding('class._e_breadcrumbs__item') private get item(): boolean {
        return true;
    }

}
