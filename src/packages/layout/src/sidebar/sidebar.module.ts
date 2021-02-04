import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ESidebarBadge} from './sidebar-badge';
import {ESidebarDivider} from './sidebar-divider';
import {ESidebarIcon} from './sidebar-icon';
import {ESidebarItem} from './sidebar-item';
import {ESidebarText} from './sidebar-text';
import {ESidebar} from './sidebar';
import {ESidebarTop} from './sidebar-top';
import {ESidebarBottom} from './sidebar-bottom';

@NgModule({
    declarations: [
        ESidebar,
        ESidebarBadge,
        ESidebarDivider,
        ESidebarIcon,
        ESidebarItem,
        ESidebarText,
        ESidebarTop,
        ESidebarBottom
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ESidebar,
        ESidebarBadge,
        ESidebarDivider,
        ESidebarItem,
        ESidebarTop,
        ESidebarBottom
    ]
})
export class ESidebarModule {
}
