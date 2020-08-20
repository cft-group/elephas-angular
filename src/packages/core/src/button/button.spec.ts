import { EButton } from './button';

describe('EButton', (): void => {
    it('should create an instance', (): void => {
        const directive: EButton = new EButton();
        expect(directive).toBeTruthy();
    });
});
