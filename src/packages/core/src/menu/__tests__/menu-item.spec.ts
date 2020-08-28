import { EMenuItem } from '../menu-item';

describe('MenuItemDirective', (): void => {
    it('should create an instance', (): void => {
        const directive: EMenuItem = new EMenuItem();
        expect(directive).toBeTruthy();
    });
});
