const initialState = {
    saturation: false,
    noise: false,
    brightness: false
}

const popup = (state = initialState, action) => {
    switch (action.type) {
        case 'POPUP_OPEN':
            return {
                ...state,
                [action.name]: true
            }
        case 'POPUP_CLOSE':
            return {
                ...state,
                [action.name]: false
            }
        default:
            return state
    }
}

export default popup