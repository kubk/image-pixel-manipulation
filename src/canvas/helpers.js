/**
 * @param {string|null} imageName
 */
export function downloadCanvasImage(imageName) {
    const canvas = document.querySelector('canvas')

    if (!canvas || !imageName) {
        return
    }

    const link = document.createElement('a')
    link.href = canvas.toDataURL()
    link.download = imageName
    // In Firefox we need explicitly add new link element to the DOM, otherwise click() will not work
    document.body.appendChild(link)
    link.click()
}