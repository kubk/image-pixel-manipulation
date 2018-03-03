import { ActionTypes as history } from 'redux-undo'

const canvasActions = [
    'IMAGE_UPLOADED',
    'APPLY_FILTER',
    history.UNDO,
    history.REDO,
]

const drawImageElement = (canvas, image) => {
    const context = canvas.getContext('2d')
    canvas.width = image.width
    canvas.height = image.height
    context.drawImage(image, 0, 0, image.width, image.height)
}

const applyFilter = (canvas, filter) => {
    const context = canvas.getContext('2d')
    const image = context.getImageData(0, 0, canvas.width, canvas.height)
    filter(image.data)
    context.putImageData(image, 0, 0)
}

const clearCanvas = (canvas) => {
    const context = canvas.getContext('2d')
    context.clearRect(0, 0, canvas.width, canvas.height)
}

let canvas

export const canvasMiddleware = store => next => action => {
    canvas = canvas || document.querySelector('canvas')

    next(action)

    if (canvasActions.includes(action.type)) {
        const { image, filter } = store.getState().canvas.present

        if (!image) {
            return clearCanvas(canvas)
        }

        if (filter) {
            applyFilter(canvas, filter)
        } else {
            drawImageElement(canvas, image)
        }
    }
}