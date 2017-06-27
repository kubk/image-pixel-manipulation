import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Draggable from 'react-draggable'
import './Dialog.css'

export default class Dialog extends Component {
    onDragStart(event) {
        // Prevent dialog dragging when target is an input tag
        if (event.target.tagName === 'INPUT') {
            return false
        }
    }

    onOk = () => {
        this.props.onOk()
        this.props.onCancel()
    }

    render() {
        const {onCancel, text} = this.props;

        return (
            <div className="pop-up">
                <Draggable onStart={this.onDragStart}>
                  <div className="pop-up__body">
                    <p className="pop-up__text">{text}</p>
                    {this.props.children}
                    <button title="Ok" className="pop-up__button" onClick={this.onOk}>Ok</button>
                    <button title="Cancel" className="pop-up__button" onClick={onCancel}>Close</button>
                  </div>
                </Draggable>
            </div>
        )
    }
}

Dialog.propTypes = {
    text: PropTypes.string,
    onOk: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
}
