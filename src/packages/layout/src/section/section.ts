import {ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'section[eSection]',
    templateUrl: './section.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
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

    @HostBinding('class._e_section') public get section(): boolean {
        return true;
    }

    @HostBinding('class._e_section_size_normal') public get sizeNormal(): boolean {
        return this.size === 'normal';
    }

    @HostBinding('class._e_section_size_small') public get sizeSmall(): boolean {
        return this.size === 'small';
    }

}
