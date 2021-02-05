import {AfterViewInit, Directive, ElementRef, HostListener, Input, OnDestroy} from '@angular/core';
import {merge, Observable, Subscription} from 'rxjs';
import {delay} from 'rxjs/operators';
import {EDropdown} from './dropdown';
import {EDropdownItem} from './dropdown-item';

@Directive({
    selector: '[eDropdownTriggers]'
})
export class EDropdownTriggers implements AfterViewInit, OnDestroy {

    /**
     * The dropdown list to be attached to this trigger.
     */
    @Input('eDropdownTriggers') public dropdown: EDropdown;

    private focused: boolean = false;
    private subs: Subscription = new Subscription();

    constructor(private elementRef: ElementRef<HTMLInputElement>) {
    }

    @HostListener('focusin')
    public handleFocus(): void {
        this.dropdown.opened = true;
        this.focused = true;
    }

    @HostListener('document:click', ['$event'])
    public documentClick(event: Event): void {
        const target: HTMLElement = <HTMLElement>event.target;
        this.dropdown.opened = this.elementRef.nativeElement.parentElement.contains(target);
        this.focused = this.elementRef.nativeElement.parentElement.contains(target);
        this.dropdown.focused.next(this.focused);
    }

    @HostListener('document:keydown', ['$event'])
    public handleKeydown(event: KeyboardEvent): void {
        if (this.focused) {
            const keyCode: string = event.code;
            if (keyCode === 'Space') {
                this.dropdown.opened = !this.dropdown.opened;
                this.dropdown.focused.next(this.dropdown.opened);
            }
        }
        if (this.dropdown.opened) {
            const keyCode: string = event.code;
            if (keyCode === 'Escape') {
                this.dropdown.opened = false;
                this.dropdown.focused.next(false);
                return;
            }
            if (keyCode === 'Enter') {
                const item: EDropdownItem = this.dropdown.items.toArray().find((it: EDropdownItem): boolean => it.active);
                if (item) {
                    item.onSelectionChange.emit(item.value);
                    item.selected = true;
                }
                return;
            }
            if (keyCode === 'ArrowUp' || keyCode === 'ArrowDown') {
                this.dropdown.keyManager.onKeydown(event);
            }
        }
    }

    public ngAfterViewInit(): void {
        this.elementRef.nativeElement.readOnly = true;
        this.subscribeItemsSelectionChange();
    }

    public ngOnDestroy(): void {
        this.subs.unsubscribe();
    }

    private subscribeItemsSelectionChange(): void {
        this.subs.add(merge(...this.dropdown.items.map((item: EDropdownItem): Observable<string> => item.onSelectionChange))
            .pipe(delay(0))
            .subscribe((value: string): void => {
                this.elementRef.nativeElement.value = value || '';
                if (value) {
                    this.dropdown.items.toArray().forEach((it: EDropdownItem): void => {
                        it.selected = it.value === value;
                    });
                }
                this.dropdown.opened = false;
                this.elementRef.nativeElement.blur();
                this.dropdown.focused.next(false);
        }));
    }

}
