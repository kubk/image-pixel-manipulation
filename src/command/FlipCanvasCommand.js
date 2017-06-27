export default class FlipCanvasCommand {
    /**
     * @param {CanvasWrapper} canvasWrapper
     * @param {boolean} isFlipVertical
     */
    constructor(canvasWrapper, isFlipVertical) {
        this.canvasWrapper = canvasWrapper
        this.isFlipVertical = isFlipVertical
    }

    execute() {
        if (this.isFlipVertical) {
            this.canvasWrapper.flipVertical()
        } else {
            this.canvasWrapper.flipHorizontal()
        }
    }

    undo() {
        this.execute()
    }
}