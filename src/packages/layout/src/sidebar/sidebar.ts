import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'e-sidebar, [eSidebar]',
    templateUrl: './sidebar.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ESidebar {

    @HostBinding('class._e_sidebar') public sidebar: boolean = true;

    @Input()
    @HostBinding('class._e_sidebar_collapsed')
    public isCollapse: boolean;

}
