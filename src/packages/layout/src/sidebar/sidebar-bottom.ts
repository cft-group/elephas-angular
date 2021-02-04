import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
    selector: 'e-sidebar-bottom, [eSidebarBottom]',
    template: '<ng-content></ng-content>',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ESidebarBottom {

    /**
     * @internal
     */
    @HostBinding('class._e_sidebar__bottom') public sidebarBottom: boolean = true;

}
