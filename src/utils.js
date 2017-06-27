/**
 * @param {string} base64
 * @param {string} imageName
 */
export function downloadImage(base64, imageName) {
    const link = document.createElement('a')
    link.href = base64
    link.download = imageName
    // In Firefox we need explicitly add new link element to the DOM, otherwise click() will not work
    document.body.appendChild(link)
    link.click()
}
