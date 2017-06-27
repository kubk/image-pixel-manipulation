class FlipCanvasCommand {
    /**
     * @param {CanvasWrapper} canvasWrapper
     * @param {bool} isFlipVertical
     */
    constructor(canvasWrapper, isFlipVertical) {
        this.canvasWrapper = canvasWrapper;
        this.isFlipVertical = isFlipVertical;
    }

    execute() {
        if (this.isFlipVertical) {
            this.canvasWrapper.flipVertical();
        } else {
            this.canvasWrapper.flipHorizontal();
        }
    }

    undo() {
        this.execute();
    }
}

export default FlipCanvasCommand;
