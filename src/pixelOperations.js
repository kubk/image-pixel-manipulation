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
        const avg = (pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3;
        pixels[i] = pixels[i + 1] = pixels[i + 2] = avg;
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
 * @param {Uint8ClampedArray} pixels
 */
export function sepia(pixels) {
    // Red - sum total of 18.9% blue, 76.9% green, 39.3% red
    const getRed = (r, g, b) => r * 0.189 + g * 0.769 + b * 0.393;
    // Green - sum total of 16.8% blue, 68.6% green, 34.9% red
    const getGreen = (r, g, b) => r * 0.168 + g * 0.686 + b * 0.349;
    // Blue - sum total of 13.1% blue, 53.4% green, 27.2% red
    const getBlue = (r, g, b) => r * 0.131 + g * 0.534 + b * 0.272;

    for (let i = 0; i < pixels.length; i += 4) {
        pixels[i] = getRed(pixels[i], pixels[i + 1], pixels[i + 2]);
        pixels[i + 1] = getGreen(pixels[i], pixels[i + 1], pixels[i + 2]);
        pixels[i + 2] = getBlue(pixels[i], pixels[i + 1], pixels[i + 2]);
    }
}

/**
 * @param {int} factor
 * @param {Uint8ClampedArray} pixels
 */
export function brightness(factor, pixels) {
    for (let i = 0; i < pixels.length; i += 4) {
        pixels[i] += factor;
        pixels[i + 1] += factor;
        pixels[i + 2] += factor;
    }
}

/**
 * @param {number} rSaturate
 * @param {number} gSaturate
 * @param {number} bSaturate
 * @param {Uint8ClampedArray} pixels
 */
export function saturate(rSaturate, gSaturate, bSaturate, pixels) {
    for (let i = 0; i < pixels.length; i += 4) {
        pixels[i] *= rSaturate;
        pixels[i + 1] *= gSaturate;
        pixels[i + 2] *= bSaturate;
    }
}
