import { ELink } from './link';

describe('LinkDirective', (): void => {
    it('should create an instance', (): void => {
        const directive: ELink = new ELink();
        expect(directive).toBeTruthy();
    });
});
