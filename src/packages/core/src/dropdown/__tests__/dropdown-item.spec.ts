import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {EDropdownItem} from '../dropdown-item';

describe('EDropdownItem', (): void => {
    let component: EDropdownItem;
    let fixture: ComponentFixture<EDropdownItem>;

    beforeEach(waitForAsync((): void => {
        TestBed.configureTestingModule({
            declarations: [ EDropdownItem ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(EDropdownItem);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });

    it('should click', (): void => {
        spyOn(component.onSelectionChange, 'emit');
        const item: HTMLDivElement = fixture.debugElement.query(By.css('._e_dropdown__item')).nativeElement;
        item.dispatchEvent(new MouseEvent('click'));

        fixture.detectChanges();
        expect(component.onSelectionChange.emit).toHaveBeenCalled();
    });

});
