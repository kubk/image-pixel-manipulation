export default class PixelManipulationCommand {
    /**
     * @param {CanvasWrapper} canvasWrapper
     * @param {Function} pixelOperation
     */
    constructor(canvasWrapper, pixelOperation) {
        this.canvasWrapper = canvasWrapper;
        this.pixelOperation = pixelOperation;
        this.oldImageData = null;
    }

    execute() {
        this.oldImageData = this.canvasWrapper.getImageData();
        this.canvasWrapper.applyOperation(this.pixelOperation);
    }

    undo() {
        this.canvasWrapper.putImageData(this.oldImageData);
    }
}