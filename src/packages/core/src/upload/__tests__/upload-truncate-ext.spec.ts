import { EUploadTruncateExt } from '../upload-truncate-ext';

describe('Pipe: EUploadTruncateExt', (): void => {
    it('create an instance', (): void => {
        const pipe: EUploadTruncateExt = new EUploadTruncateExt();
        expect(pipe).toBeTruthy();
    });
});
