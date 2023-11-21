import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {EHeading} from '../heading';

describe('EHeading', (): void => {
    let component: EHeading;
    let fixture: ComponentFixture<EHeading>;

    beforeEach(waitForAsync((): void => {
        TestBed.configureTestingModule({
        declarations: [ EHeading ]
        })
        .compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(EHeading);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });
});
