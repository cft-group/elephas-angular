import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EBreadcrumbs} from './breadcrumbs';
import {EBreadcrumbItem} from './breadcrumb-item';

@NgModule({
    declarations: [EBreadcrumbs, EBreadcrumbItem],
    imports: [
        CommonModule
    ],
    exports: [EBreadcrumbs, EBreadcrumbItem]
})
export class EBreadcrumbsModule { }
