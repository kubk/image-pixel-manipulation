/**
 * @param {Uint8ClampedArray} pixels
 */
export function invertColors(pixels) {
    for (let i = 0; i < pixels.length; i += 4) {
        pixels[i] = 255 - pixels[i];
        pixels[i + 1] = 255 - pixels[i + 1];
        pixels[i + 2] = 255 - pixels[i + 2];
    }
}

/**
 * @param {Uint8ClampedArray} pixels
 */
export function grayscale(pixels) {
    for (let i = 0; i < pixels.length; i += 4) {
        let avg = (pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3;
        pixels[i] = pixels[i + 1] = pixels[i + 2] = avg;
    }
}

/**
 * @param {Uint8ClampedArray} pixels
 */
export function flipVertical(pixels) {
    for (let i = 0; i < pixels.length / 2; i += 4) {
        let lastIndex = pixels.length - 1 - i;
        [pixels[i], pixels[lastIndex - 3]] = [pixels[lastIndex - 3], pixels[i]];
        [pixels[i + 1], pixels[lastIndex - 2]] = [pixels[lastIndex - 2], pixels[i + 1]];
        [pixels[i + 2], pixels[lastIndex - 1]] = [pixels[lastIndex - 1], pixels[i + 2]];
    }
}

/**
 * @param {int} factor
 * @param {Uint8ClampedArray} pixels
 */
export function noise(factor, pixels) {
    for (let i = 0; i < pixels.length; i += 4) {
        const randomColor = Math.floor(Math.random() * factor) + 1;
        pixels[i] += randomColor;
        pixels[i + 1] += randomColor;
        pixels[i + 2] += randomColor;
    }
}

/**
 * @param {int} factor
 * @param {Uint8ClampedArray} pixels
 */
export function changeBrightness(factor, pixels) {
    for (let i = 0; i < pixels.length; i += 4) {
        pixels[i] += factor;
        pixels[i + 1] += factor;
        pixels[i + 2] += factor;
    }
}

const getBrightness = (r, g, b) => 0.299 * r + 0.587 * g + 0.114 * b;

/**
 * @param {int} threshold
 * @param {Rgb} darkColor
 * @param {Rgb} lightColor
 * @param {Uint8ClampedArray} pixels
 */
export function binarisation(threshold, darkColor, lightColor, pixels) {
    for (let i = 0; i < pixels.length; i += 4) {
        const brightness = getBrightness(pixels[i], pixels[i + 1], pixels[i + 2]);
        const color = (brightness > threshold) ? lightColor : darkColor;

        [pixels[i], pixels[i + 1], pixels[i + 2]] = color.toArray();
    }
}
