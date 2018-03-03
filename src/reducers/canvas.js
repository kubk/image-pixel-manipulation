const initialState = {
    image: null,
    filter: null,
    isImageDownloading: false
}

const canvas = (state = initialState, action) => {
    switch (action.type) {
        case 'APPLY_FILTER':
            return {
                ...state,
                filter: action.filter
            }
        case 'IMAGE_UPLOADED':
            return {
                ...state,
                image: action.image,
                filter: null
            }
        case 'IMAGE_DOWNLOADING':
            return {
                ...state,
                isImageDownloading: action.isImageDownloading
            }
        default:
            return state
    }
}

export default canvas