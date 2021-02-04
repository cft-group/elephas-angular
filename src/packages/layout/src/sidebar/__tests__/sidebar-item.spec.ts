import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {ESidebarItem} from '../sidebar-item';

describe('ESidebarItem', (): void => {
    let component: ESidebarItem;
    let fixture: ComponentFixture<ESidebarItem>;

    beforeEach(waitForAsync((): void => {
        TestBed.configureTestingModule({
            declarations: [ESidebarItem]
        }).compileComponents();

        fixture = TestBed.createComponent(ESidebarItem);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });
});
