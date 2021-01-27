import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {EDropdown} from '../dropdown';

describe('EDropdown', (): void => {
    let component: EDropdown;
    let fixture: ComponentFixture<EDropdown>;

    beforeEach(waitForAsync((): void => {
        TestBed.configureTestingModule({
            declarations: [ EDropdown ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(EDropdown);
        component = fixture.componentInstance;
    }));

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });

});
