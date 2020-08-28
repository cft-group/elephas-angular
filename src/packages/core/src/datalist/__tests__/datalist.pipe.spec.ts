import {BrowserModule, DomSanitizer } from '@angular/platform-browser';
import {TestBed} from '@angular/core/testing';
import {EDataListPipe} from '../datalist.pipe';

describe('EDataListPipe', (): void => {
    beforeEach((): void => {
        TestBed.configureTestingModule({
            imports: [BrowserModule]
        });
    });
    it('create an instance', (): void => {
        const domSanitizer: DomSanitizer = TestBed.inject(DomSanitizer);
        const pipe: EDataListPipe = new EDataListPipe(domSanitizer);
        expect(pipe).toBeTruthy();
    });
});
