import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {EDataList} from '../datalist';

describe('EDataList', (): void => {
    let component: EDataList;
    let fixture: ComponentFixture<EDataList>;

    beforeEach(waitForAsync((): void => {
        TestBed.configureTestingModule({
            declarations: [ EDataList ]
        })
            .compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(EDataList);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });
});
