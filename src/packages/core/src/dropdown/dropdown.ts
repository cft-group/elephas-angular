import {
    AfterContentInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    ElementRef,
    HostBinding,
    Input,
    OnDestroy,
    QueryList,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import {ActiveDescendantKeyManager} from '@angular/cdk/a11y';
import { BehaviorSubject, Subscription } from 'rxjs';
import {EDropdownItem} from './dropdown-item';

const defaultMinimumItemsCount: number = 5;

@Component({
    selector: 'e-dropdown',
    templateUrl: './dropdown.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EDropdown implements AfterContentInit, OnDestroy {

    /**
     * Whether the dropdown is opened.
     */
    @Input() public get opened(): boolean {
        return this._opened;
    }
    public set opened(opened: boolean) {
        this._opened = opened;
        this.cdr.markForCheck();
    }

    /**
     * @internal
     */
    @HostBinding() public tabindex: number = 0;

    /**
     * @internal
     */
    @HostBinding('class._e_dropdown__card') public eDropdownCard: boolean = true;

    /**
     * @internal
     */
    @ContentChildren(EDropdownItem) public items: QueryList<EDropdownItem>;

    /**
     * @internal
     */
    public keyManager: ActiveDescendantKeyManager<EDropdownItem>;

    /**
     * @internal
     */
    public previousItemActive: number;

    /**
     * @internal
     */
    public height: string = 'auto';

    /**
     * @internal
     */
    public focused: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    @ViewChild('dropdownCard') private elementRef: ElementRef<HTMLDivElement>;
    private _opened: boolean = false;
    private subs: Subscription = new Subscription();

    constructor(private cdr: ChangeDetectorRef) {
    }

    public ngAfterContentInit(): void {
        this.keyManager = new ActiveDescendantKeyManager<EDropdownItem>(this.items).withWrap();
        this.subs.add(this.keyManager.change.subscribe((index: number): void => {
            const items: EDropdownItem[] = this.items.toArray();
            if (items[this.previousItemActive]) {
                items[this.previousItemActive].setInactiveStyles();
            }
            const dropdownItems: NodeListOf<Element> = this.elementRef.nativeElement.querySelectorAll('._e_dropdown__item');
            const height: number = dropdownItems[0].getBoundingClientRect().height;
            const dropdownHeight: number = height * defaultMinimumItemsCount;
            const element: HTMLDivElement = this.elementRef.nativeElement;
            element.scrollTop = this.getItemScrollPosition((index * height), height, element.scrollTop, dropdownHeight);
            this.items.toArray()[index].setActiveStyles();
            this.previousItemActive = index;
            this.cdr.markForCheck();
        }));
    }

    public ngOnDestroy(): void {
        this.subs.unsubscribe();
    }

    /**
     * @internal
     */
    public onContentChanged(): void {
        if (this.items && this.items.toArray().length > defaultMinimumItemsCount && this.elementRef && this._opened) {
            const dropdownItems: NodeListOf<Element> = this.elementRef.nativeElement.querySelectorAll('._e_dropdown__item');
            const height: number = dropdownItems[0].getBoundingClientRect().height * defaultMinimumItemsCount;
            this.elementRef.nativeElement.style.height = `${height}px`;
            this.elementRef.nativeElement.style.overflow = 'hidden';
        }
    }

    private getItemScrollPosition(itemOffset: number, itemHeight: number, currentScrollPosition: number, elementHeight: number): number {
        if (itemOffset < currentScrollPosition) {
            return itemOffset;
        }
        if (itemOffset + itemHeight > currentScrollPosition + elementHeight) {
            return Math.max(0, itemOffset - elementHeight + itemHeight);
        }
        return currentScrollPosition;
    }

}
