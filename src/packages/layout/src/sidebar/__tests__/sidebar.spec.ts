import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {ESidebar} from '../sidebar';

describe('ESidebar', (): void => {
    let component: ESidebar;
    let fixture: ComponentFixture<ESidebar>;

    beforeEach(waitForAsync((): void => {
        TestBed.configureTestingModule({
            declarations: [ESidebar]
        }).compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(ESidebar);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create an instance', (): void => {
        expect(component).toBeTruthy();
    });
});
