import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { EBreadcrumbs } from '../breadcrumbs';

describe('EBreadcrumbs', (): void => {
    let component: EBreadcrumbs;
    let fixture: ComponentFixture<EBreadcrumbs>;

    beforeEach(waitForAsync((): void => {
        TestBed.configureTestingModule({
            declarations: [ EBreadcrumbs ]
        })
            .compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(EBreadcrumbs);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });

    it('should have as className "undefined"', (): void => {
        expect(component.className).toEqual(undefined);
    });
});
