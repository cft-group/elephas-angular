import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ESidebarBottom } from '../sidebar-bottom';

describe('ESidebarBottom', (): void => {
    let component: ESidebarBottom;
    let fixture: ComponentFixture<ESidebarBottom>;

    beforeEach(waitForAsync((): void => {
        TestBed.configureTestingModule({
            declarations: [ ESidebarBottom ]
        })
        .compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(ESidebarBottom);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });
});
