import {Directive, HostBinding} from '@angular/core';

@Directive({
    selector: '[eMenuItem]'
})
export class EMenuItem {
    @HostBinding('class') private readonly class: string = '_e_menu__item';
}
