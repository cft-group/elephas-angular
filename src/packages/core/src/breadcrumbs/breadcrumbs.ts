import {ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'e-breadcrumbs, [eBreadcrumbs]',
    template: '<ng-content select="[eBreadcrumbItem]"></ng-content>',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EBreadcrumbs {

    @HostBinding('class._e_breadcrumbs') public breadcrumbsClass: boolean = true;

}
