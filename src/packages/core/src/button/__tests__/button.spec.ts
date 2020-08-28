import { EButton } from '../button';

describe('EButton', (): void => {
    const directive: EButton = new EButton();
    it('should create an instance', (): void => {
        expect(directive).toBeTruthy();
    });

    it('should have as appearance "default"', (): void => {
        expect(directive.appearance).toEqual('default');
    });

    it('should have as appearance "default"', (): void => {
        expect(directive.size).toEqual('default');
    });

    it('should have as appearance "false"', (): void => {
        expect(directive.disabled).toEqual(false);
    });
});
