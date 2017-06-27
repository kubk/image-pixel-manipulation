import CanvasWrapper from '../src/CanvasWrapper';

describe('CanvasWrapper', () => {
    it('changes canvas size according to given image', () => {
        const canvas = {
            width: 200,
            height: 200,
            getContext() {
                const canvasContextStub = {drawImage() {}};
                return canvasContextStub;
            }
        };

        const img = document.createElement('img');
        img.width = 100;
        img.height = 100;

        const canvasWrapper = new CanvasWrapper(canvas);
        canvasWrapper.drawImageElement(img);

        expect(canvas.width).toEqual(100);
        expect(canvas.height).toEqual(100);
    });
});
