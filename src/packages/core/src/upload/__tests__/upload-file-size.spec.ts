import { EUploadFileSize } from '../upload-file-size';

describe('Pipe: EUploadFileSize', (): void => {
    it('create an instance', (): void => {
        const pipe: EUploadFileSize = new EUploadFileSize();
        expect(pipe).toBeTruthy();
    });
});
