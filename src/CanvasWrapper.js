export default class CanvasWrapper {
    /**
     * @param {HTMLCanvasElement} canvas
     */
    constructor(canvas) {
        this.canvas = canvas
        this.context = canvas.getContext('2d')
        this.dx = 0
        this.dy = 0
    }

    /**
     * @param {HTMLImageElement} image
     */
    drawImageElement(image) {
        this.canvas.width = image.width
        this.canvas.height = image.height
        this.context.drawImage(
            image,
            this.dx,
            this.dy,
            image.width,
            image.height
        )
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/ImageData
     * @return {ImageData}
     */
    getImage() {
        return this.context.getImageData(
            this.dx,
            this.dy,
            this.canvas.width,
            this.canvas.height
        )
    }

    /**
     * @param {ImageData} image
     */
    putImage(image) {
        this.context.putImageData(image, this.dx, this.dy)
    }

    /**
     * @param {Function} pixelOperation
     */
    applyOperation(pixelOperation) {
        const image = this.getImage()
        pixelOperation(image.data)
        this.putImage(image)
    }

    flipVertical() {
        const horizontalScalingFactor = 1
        const verticalScalingFactor = -1
        this.context.scale(horizontalScalingFactor, verticalScalingFactor)
        this.context.drawImage(this.canvas, 0, -this.canvas.height)
        this.resetDefaultTransformation()
    }

    flipHorizontal() {
        const horizontalScalingFactor = -1
        const verticalScalingFactor = 1
        this.context.scale(horizontalScalingFactor, verticalScalingFactor)
        this.context.drawImage(
            this.canvas,
            this.dx,
            this.dy,
            -this.canvas.width,
            this.canvas.height
        )
        this.resetDefaultTransformation()
    }

    /**
     * @private
     */
    resetDefaultTransformation() {
        this.context.setTransform(1, 0, 0, 1, 0, 0)
    }

    /**
     * @return {string}
     */
    getImageAsUrl() {
        return this.canvas.toDataURL()
    }
}
