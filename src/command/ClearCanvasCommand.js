export default class ClearCanvasCommand {
    /**
     * @param {CanvasWrapper} canvasWrapper
     */
    constructor(canvasWrapper) {
        this.canvasWrapper = canvasWrapper;
        this.oldImageData = null;
    }

    execute() {
        this.oldImageData = this.canvasWrapper.getImageData();
        this.canvasWrapper.clear();
    }

    undo() {
        this.canvasWrapper.putImageData(this.oldImageData);
    }
}