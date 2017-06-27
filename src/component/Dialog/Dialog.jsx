import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import './Dialog.css';

class Dialog extends Component {
    onDragStart(event) {
        // Prevent dialog dragging when target is an input tag
        if (event.target.tagName === 'INPUT') {
            return false;
        }
    }

    onOk = () => {
        this.props.onOk();
        this.props.onCancel();
    }

    render() {
        const {onCancel, text} = this.props;

        return (
            <div className="pop-up">
                <Draggable onStart={this.onDragStart}>
                  <div className="pop-up__body">
                    <p className="pop-up__text">{text}</p>
                    {this.props.children}
                    <button className="pop-up__button" onClick={this.onOk}>Ok</button>
                    <button className="pop-up__button" onClick={onCancel}>Close</button>
                  </div>
                </Draggable>
            </div>
        );
    }
}

Dialog.propTypes = {
    onOk: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
};

export default Dialog;
