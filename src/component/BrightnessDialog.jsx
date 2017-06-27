import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Dialog from './Dialog/Dialog';
import RangeSlider from './RangeSlider/RangeSlider';

class BrightnessPopUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            brightness: 0,
        }
    }

    updateValue = (brightness) => {
        this.setState({brightness});
    }

    render() {
        return (
            <Dialog
                text='Brightness'
                onCancel={this.props.onCancel}
                onOk={() => this.props.onOk(this.state.brightness)}
            >
                <RangeSlider
                    min={-255}
                    max={255}
                    step={1}
                    value={this.state.brightness}
                    updateValue={this.updateValue}
                />
            </Dialog>
        );
    }
}

BrightnessPopUp.propTypes = {
    onOk: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
};

export default BrightnessPopUp;
