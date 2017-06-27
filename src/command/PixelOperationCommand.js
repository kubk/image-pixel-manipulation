class PixelOperationCommand {
    /**
     * @param {CanvasWrapper} canvasWrapper
     * @param {Function} pixelOperation
     */
    constructor(canvasWrapper, pixelOperation) {
        this.canvasWrapper = canvasWrapper;
        this.pixelOperation = pixelOperation;
        this.oldImage = null;
    }

    execute() {
        this.oldImage = this.canvasWrapper.getImage();
        this.canvasWrapper.applyOperation(this.pixelOperation);
    }

    undo() {
        this.canvasWrapper.putImage(this.oldImage);
    }
}

export default PixelOperationCommand;
