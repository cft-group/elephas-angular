import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ESection } from './section';

describe('ESection', (): void => {
    let component: ESection;
    let fixture: ComponentFixture<ESection>;

    beforeEach(async((): void => {
        TestBed.configureTestingModule({
            declarations: [ ESection ]
        })
            .compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(ESection);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });
});
