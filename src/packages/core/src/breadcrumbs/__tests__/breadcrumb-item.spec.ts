import { EBreadcrumbItem } from '../breadcrumb-item';

describe('EBreadcrumbItem', (): void => {
    it('should create an instance', (): void => {
        const directive: EBreadcrumbItem = new EBreadcrumbItem();
        expect(directive).toBeTruthy();
    });
});
