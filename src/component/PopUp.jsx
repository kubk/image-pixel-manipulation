import React, {Component} from 'react';
import Draggable from 'react-draggable';

export default class PopUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            display: props.display,
            onOk: props.onOk,
        };

        this.onOk = this.onOk.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    onClose() {
        this.setState({display: false});
    }

    onOk() {
        this.state.onOk('on ok clicked');
        this.setState({display: false});
    }

    onDragStart(event) {
        if (event.target.tagName === 'INPUT') {
            return false;
        }
    }

    render() {
        if (!this.state.display) {
            return null;
        }

        return (
            <div className="pop-up">
                <Draggable onStart={this.onDragStart}>
                  <div className="pop-up__body">
                    <p className="pop-up__text">{this.props.text}</p>
                    {this.props.children}
                    <button onClick={this.onOk}>Ok</button>
                    <button onClick={this.onClose}>Close</button>
                  </div>
                </Draggable>
            </div>
        );
    }
}
