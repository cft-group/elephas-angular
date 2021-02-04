import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
    selector: 'e-sidebar-top, [eSidebarTop]',
    template: '<ng-content></ng-content>',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ESidebarTop {

    /**
     * @internal
     */
    @HostBinding('class._e_sidebar__top') public sidebarTop: boolean = true;

}
