export default class CanvasWrapper {
    /**
     * @param {HTMLCanvasElement} canvas
     */
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
    }

    /**
     * @param {HTMLImageElement} img
     */
    drawImage(img) {
        const dx = 0, dy = 0;
        this.canvas.width = img.width;
        this.canvas.height = img.height;
        this.context.drawImage(img, dx, dy, img.width, img.height);
    }

    /**
     * @return {ImageData}
     */
    getImageData() {
        const upperLeftX = 0, upperLeftY = 0;
        return this.context.getImageData(upperLeftX, upperLeftY, this.canvas.width, this.canvas.height);
    }

    /**
     * @param {ImageData} imageData
     */
    putImageData(imageData) {
        const dx = 0, dy = 0;
        this.context.putImageData(imageData, dx, dy);
    }

    /**
     * @param {Function} pixelOperation
     */
    applyOperation(pixelOperation) {
        const imageData = this.getImageData();
        pixelOperation(imageData.data);
        this.putImageData(imageData);
    }

    clear() {
        const startX = 0, startY = 0;
        this.context.clearRect(startX, startY, this.canvas.width, this.canvas.height);
    }

    /**
     * @return {string}
     */
    getImageAsUrl() {
        return this.canvas.toDataURL();
    }
}