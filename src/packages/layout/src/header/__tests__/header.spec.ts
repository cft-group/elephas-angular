import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {EHeader} from '../header';

describe('EHeader', (): void => {
    let component: EHeader;
    let fixture: ComponentFixture<EHeader>;

    beforeEach(waitForAsync((): void => {
        TestBed.configureTestingModule({
            declarations: [ EHeader ]
        })
        .compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(EHeader);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });
});
