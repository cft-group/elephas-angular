import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {EDatalistContent} from '../datalist-content';

describe('EDatalistContent', (): void => {
    let component: EDatalistContent;
    let fixture: ComponentFixture<EDatalistContent>;

    beforeEach(waitForAsync((): void => {
        TestBed.configureTestingModule({
            declarations: [ EDatalistContent ]
        })
            .compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(EDatalistContent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });
});
