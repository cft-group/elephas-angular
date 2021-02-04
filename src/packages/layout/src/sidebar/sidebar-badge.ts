import {Directive, HostBinding} from '@angular/core';

@Directive({
    selector: '[eSidebarBadge]'
})
export class ESidebarBadge {

    @HostBinding('class._e_sidebar-item__badge') public sidebarItemBadge: boolean = true;

}
