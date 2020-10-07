import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ETag } from '../tag';

describe('ETag', (): void => {
    let component: ETag;
    let fixture: ComponentFixture<ETag>;

    beforeEach(waitForAsync((): void => {
        TestBed.configureTestingModule({
            declarations: [ ETag ]
        })
            .compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(ETag);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });
});
