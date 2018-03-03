import React from 'react'
import './Toolbar.css'
import { connect } from 'react-redux'
import * as filters from '../../canvas/filters'
import { applyFilter, openPopup } from '../../actions/index'
import { ActionCreators as history } from 'redux-undo'

const Toolbar = ({ image, dispatch }) => {
    return <div className="toolbar">
        <button className="toolbar__button" title="Effects">
            <span className="fa fa-magic"/>
        </button>

        <ul className="drop-up">
            <li className="drop-up__item" onMouseDown={() => dispatch(openPopup('saturation'))}>Saturate</li>
            <li className="drop-up__item" onMouseDown={() => dispatch(applyFilter(filters.greyscale))}>Greyscale</li>
            <li className="drop-up__item" onMouseDown={() => dispatch(applyFilter(filters.sepia))}>Sepia</li>
            <li className="drop-up__item" onMouseDown={() => dispatch(applyFilter(filters.invertColors))}>Invert colors</li>
            <li className="drop-up__item" onMouseDown={() => dispatch(openPopup('noise'))}>Noise</li>
            <li className="drop-up__item" onMouseDown={() => dispatch(openPopup('brightness'))}>Brightness</li>
        </ul>

        <button className="toolbar__button" title="Undo" onClick={() => dispatch(history.undo())}>
            <span className="fa fa-undo"/>
        </button>

        <button className="toolbar__button" title="Redo" onClick={() => dispatch(history.redo())}>
            <span className="fa fa-repeat"/>
        </button>

        <button className="toolbar__button"
                title="Flip vertical"
                onClick={() => dispatch(applyFilter(filters.flipVertical.bind(null, image.width, image.height)))}>
            <span className="fa fa-arrows-v"/>
        </button>

        <button className="toolbar__button"
                title="Flip horizontal"
                onClick={() => dispatch(applyFilter(filters.flipHorizontal.bind(null, image.width, image.height)))}>
            <span className="fa fa-arrows-h"/>
        </button>
    </div>
}

export default connect(
    state => ({
        image: state.canvas.present.image
    })
)(Toolbar)
