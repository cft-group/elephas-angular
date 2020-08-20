import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
    selector: '[eButton]'
})
export class EButton {

    /**
     * Visual appearance.
     */
    @Input() public appearance: 'default' | 'primary' | 'danger' = 'default';
    /**
     * Button size.
     */
    @Input() public size: 'default' | 'small' | 'large' = 'default';
    /**
     * Button disabled state.
     */
    @Input() public disabled: boolean;

    @HostBinding('class._e_button_appearance_primary') public get primaryButton(): boolean {
        return this.appearance === 'primary';
    }

    @HostBinding('class._e_button_appearance_danger') public get dangerButton(): boolean {
        return this.appearance === 'danger';
    }

    @HostBinding('class._e_button') public get baseClass(): boolean {
        return true;
    }

    @HostBinding('class._e_button_size_small') public get smallButton(): boolean {
        return this.size === 'small';
    }

    @HostBinding('class._e_button_size_large') public get largeButton(): boolean {
        return this.size === 'large';
    }

    @HostBinding('class._e_button_disabled') public get disabledButton(): boolean {
        return this.disabled;
    }

}
