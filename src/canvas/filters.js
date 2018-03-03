/**
 * @param {Uint8ClampedArray} pixels
 */
export function invertColors(pixels) {
    for (let i = 0; i < pixels.length; i += 4) {
        pixels[i] = 255 - pixels[i]
        pixels[i + 1] = 255 - pixels[i + 1]
        pixels[i + 2] = 255 - pixels[i + 2]
    }
}

/**
 * @param {Uint8ClampedArray} pixels
 */
export function greyscale(pixels) {
    for (let i = 0; i < pixels.length; i += 4) {
        const avg = (pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3
        pixels[i] = pixels[i + 1] = pixels[i + 2] = avg
    }
}

/**
 * @param {int} factor
 * @param {Uint8ClampedArray} pixels
 */
export function noise(factor, pixels) {
    for (let i = 0; i < pixels.length; i += 4) {
        const randomColor = Math.floor(Math.random() * factor) + 1
        pixels[i] += randomColor
        pixels[i + 1] += randomColor
        pixels[i + 2] += randomColor
    }
}

/**
 * @param {Uint8ClampedArray} pixels
 */
export function sepia(pixels) {
    for (let i = 0; i < pixels.length; i += 4) {
        pixels[i] = pixels[i] *  0.189 + pixels[i + 1] * 0.769 + pixels[i + 2] * 0.393
        pixels[i + 1] = pixels[i] * 0.168 + pixels[i + 1] * 0.686 + pixels[i + 2] * 0.349
        pixels[i + 2] = pixels[i] * 0.131 + pixels[i + 1] * 0.534 + pixels[i + 2] * 0.272
    }
}

/**
 * @param {int} factor
 * @param {Uint8ClampedArray} pixels
 */
export function brightness(factor, pixels) {
    for (let i = 0; i < pixels.length; i += 4) {
        pixels[i] += factor
        pixels[i + 1] += factor
        pixels[i + 2] += factor
    }
}

/**
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 * @param {Uint8ClampedArray} pixels
 */
export function saturate(red, green, blue, pixels) {
    for (let i = 0; i < pixels.length; i += 4) {
        pixels[i] *= red
        pixels[i + 1] *= green
        pixels[i + 2] *= blue
    }
}

/**
 * @param {number} width
 * @param {number} height
 * @param {Uint8ClampedArray} pixels
 */
export function flipVertical(width, height, pixels) {
    const pixelLength = 4,
        widthShift = pixelLength * width

    for (let i = 0; i < height / 2; i++) {
        for (let j = 0; j < widthShift; j += pixelLength) {
            const offset = i * widthShift,
                bottomOffset = widthShift * (height - i - 1)

            for (let m = 0; m < pixelLength; m++) {
                const tmp = pixels[offset + j + m]
                pixels[offset + j + m] = pixels[bottomOffset + j + m]
                pixels[bottomOffset + j + m] = tmp
            }
        }
    }
}

/**
 * @param {number} width
 * @param {number} height
 * @param {Uint8ClampedArray} pixels
 */
export function flipHorizontal(width, height, pixels) {
    const pixelLength = 4,
        widthShift = pixelLength * width

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < widthShift / 2; j += pixelLength) {
            const offset = i * widthShift,
                limit = offset + widthShift

            for (let m = 0; m < pixelLength; m++) {
                const tmp = pixels[offset + j + m]
                pixels[offset + j + m] = pixels[limit - j - (pixelLength - m)]
                pixels[limit - j - (pixelLength - m)] = tmp
            }
        }
    }
}
