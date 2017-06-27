export default class Rgb {
    /**
     * @param {number} r
     * @param {number} g
     * @param {number} b
     */
    constructor(r, g, b) {
        if ([r, g, b].some((color) => color < 0 || color > 255)) {
            throw new Error('Color must be in range from 0 to 255');
        }

        this.r = r;
        this.g = g;
        this.b = b;
    }

    /**
     * @return {number[]}
     */
    toArray() {
        return [this.r, this.g, this.b];
    }

    /**
     * Creates RGB object from HTMLElement.style.backgroundColor
     *
     * @param {string} rgb
     * @return Rgb
     */
    static fromStyleBackgroundColor(rgb) {
        const [r, g, b] = rgb.match(/\d+/g);
        return new Rgb(+r, +g, +b);
    }
}