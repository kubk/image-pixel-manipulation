import * as effect from '../src/pixelOperations'

/**
 * @param {int[]} received
 * @param {int[]} expected
 * @param {Function} pixelOperation
 */
function pixelsAreEqual(received, expected, pixelOperation) {
    const receivedClamped = new Uint8ClampedArray(received)
    pixelOperation(receivedClamped)
    expect(receivedClamped).toEqual(new Uint8ClampedArray(expected))
}

describe('Pixel manipulation commands', () => {
    const given = [
    //   r   g   b  alpha
        20, 20, 20, 255, // pixel 1
        30, 30, 30, 255, // pixel 2
        40, 40, 40, 255, // pixel 3
        50, 50, 50, 255, // pixel 4
    ]

    it('invertColors works correctly', () => {
        const expected = [
            235, 235, 235, 255, // 255 - 20
            225, 225, 225, 255,
            215, 215, 215, 255,
            205, 205, 205, 255,
        ]

        pixelsAreEqual(given, expected, effect.invertColors)
    })

    it('greyscale works correctly', () => {
        const expected = [
            20, 20, 20, 255, // (20 + 20 + 20) / 3
            30, 30, 30, 255,
            40, 40, 40, 255,
            50, 50, 50, 255,
        ]

        pixelsAreEqual(given, expected, effect.grayscale)
    })

    it('brightness works correctly', () => {
        const expected = [
            55, 55, 55, 255, // 20 + 35
            65, 65, 65, 255,
            75, 75, 75, 255,
            85, 85, 85, 255,
        ]

        const factor = 35

        pixelsAreEqual(given, expected, effect.brightness.bind(null, factor))
    })

    it('saturation works correctly', () => {
        const expected = [
            10, 20, 20, 255, // 10 * 0.5, 20 * 1, 20 * 1
            15, 30, 30, 255,
            20, 40, 40, 255,
            25, 50, 50, 255,
        ]

        const rSaturate = 0.5, gSaturate = 1, bSaturate = 1

        pixelsAreEqual(given, expected, effect.saturate.bind(null, rSaturate, gSaturate, bSaturate))
    })

    it('noise works correctly', () => {
        const noiseFactor = 5
        const givenClamped = new Uint8ClampedArray(given)
        effect.noise(noiseFactor, givenClamped)

        expect(givenClamped[0]).toBeLessThanOrEqual(given[0] + noiseFactor)
        expect(givenClamped[0]).toBeGreaterThan(given[0])
        expect(givenClamped[4]).toBeLessThanOrEqual(given[4] + noiseFactor)
        expect(givenClamped[4]).toBeGreaterThan(given[4])
    })
})
