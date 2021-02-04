import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ESidebarTop } from '../sidebar-top';

describe('ESidebarTop', (): void => {
    let component: ESidebarTop;
    let fixture: ComponentFixture<ESidebarTop>;

    beforeEach(waitForAsync((): void => {
        TestBed.configureTestingModule({
            declarations: [ ESidebarTop ]
        })
        .compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(ESidebarTop);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });
});
