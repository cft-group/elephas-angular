import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'section[eSection]',
    templateUrl: './section.html',
    encapsulation: ViewEncapsulation.None,
    host: {
        '[class._e_section]': 'true',
        '[class._e_section_size_normal]': `size === 'normal'`,
        '[class._e_section_size_small]': `size === 'small'`
    }
})
export class ESection {

    /**
     * Section size.
     * @default normal
     */
    @Input() public size: 'normal' | 'small' = 'normal';
    /**
     * Section heading.
     */
    @Input() public heading: string;

}
