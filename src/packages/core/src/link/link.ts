import {Directive, HostBinding} from '@angular/core';

@Directive({
    selector: '[eLink]'
})
export class ELink {
    @HostBinding('class') private readonly class: string = '_e_link';
}
