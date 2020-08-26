import {AfterContentInit, ChangeDetectionStrategy, Component, ContentChildren, Input, QueryList, ViewEncapsulation} from '@angular/core';
import {ETab} from './tab';

@Component({
    selector: 'e-tabs',
    templateUrl: './tabs.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ETabs implements AfterContentInit {

    /**
     * Additional CSS class.
     */
    @Input() public className: string;
    /**
     * @internal
     */
    @ContentChildren(ETab) public tabs: QueryList<ETab>;

    public ngAfterContentInit(): void {
        const activeTabs: ETab[] = this.tabs.filter((tab: ETab): boolean => tab.selected);
        if (!activeTabs.length) {
            this.onSelectTab(this.tabs.first);
        }
    }

    /**
     * @internal
     */
    public onSelectTab(tab: ETab): void {
        this.tabs.toArray().forEach((t: ETab): boolean => t.selected = false);
        tab.selected = true;
    }

}
