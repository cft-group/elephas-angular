import { ESidebarBadge } from '../sidebar-badge';

describe('ESidebarBadge', (): void => {
    it('should create an instance', (): void => {
        const directive: ESidebarBadge = new ESidebarBadge();
        expect(directive).toBeTruthy();
    });
});
