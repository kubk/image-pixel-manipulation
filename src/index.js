import React from 'react'
import ReactDOM from 'react-dom'
import App from './component/App/App'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import { canvasMiddleware } from './canvas/canvasMiddleware'
import canvas from './reducers/canvas'
import popup from './reducers/popup'
import undoable, { excludeAction } from 'redux-undo'

const reducer = combineReducers({
    canvas: undoable(canvas, {
        limit: 10,
        debug: true,
        filter: excludeAction('IMAGE_DOWNLOADING')
    }),
    popup
})

const store = createStore(reducer, applyMiddleware(canvasMiddleware))

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
