import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: '[eSidebarDivider]'
})
export class ESidebarDivider {

    /**
     * @internal
     */
    @HostBinding('class._e_sidebar__divider') public sidebarDivider: boolean = true;

}
