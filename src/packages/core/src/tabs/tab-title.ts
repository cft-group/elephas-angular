import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ETab } from './tab';

@Component({
    selector: 'div[eTabTitle]',
    templateUrl: './tab-title.html',
    encapsulation: ViewEncapsulation.None
})
export class ETabTitle {

    @Input() public tab: ETab;

}
