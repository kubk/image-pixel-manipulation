import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Draggable from 'react-draggable'
import './Dialog.css'

// TODO: rename to popup
export default class Dialog extends Component {
    onDragStart(event) {
        // Prevent dialog dragging when target is an input tag
        if (event.target.tagName === 'INPUT') {
            return false
        }
    }

    render() {
        const { text, onConfirm, onClose } = this.props

        return (
            <div className="pop-up">
                <Draggable onStart={this.onDragStart}>
                  <div className="pop-up__body">
                    <p className="pop-up__text">{text}</p>
                    {this.props.children}
                    <button title="Ok" className="pop-up__button" onClick={() => { onConfirm(); onClose() }}>Ok</button>
                    <button title="Cancel" className="pop-up__button" onClick={onClose}>Close</button>
                  </div>
                </Draggable>
            </div>
        )
    }
}

Dialog.propTypes = {
    text: PropTypes.string,
    onConfirm: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
}
