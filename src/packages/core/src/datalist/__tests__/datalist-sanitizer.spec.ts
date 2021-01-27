import {BrowserModule, DomSanitizer } from '@angular/platform-browser';
import {TestBed} from '@angular/core/testing';
import {EDataListSanitizer} from '../datalist-sanitizer';

describe('EDataListSanitizer', (): void => {
    beforeEach((): void => {
        TestBed.configureTestingModule({
            imports: [BrowserModule]
        });
    });
    it('create an instance', (): void => {
        const domSanitizer: DomSanitizer = TestBed.inject(DomSanitizer);
        const pipe: EDataListSanitizer = new EDataListSanitizer(domSanitizer);
        expect(pipe).toBeTruthy();
    });
});
