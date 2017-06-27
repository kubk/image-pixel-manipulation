import PropTypes from 'prop-types';
import React, {Component} from 'react';
import RangeSlider from './RangeSlider/RangeSlider';
import Dialog from './Dialog/Dialog';

class SaturationDialog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rSaturate: 1,
            gSaturate: 1,
            bSaturate: 1,
        };
    }

    render() {
        const updateRedSaturation   = (value) => this.setState({rSaturate: value});
        const updateGreenSaturation = (value) => this.setState({gSaturate: value});
        const updateBlueSaturation  = (value) => this.setState({bSaturate: value});

        const {rSaturate, gSaturate, bSaturate} = this.state;
        const rangeSliderProps = {min: 0, max: 2, step: 0.1};

        return (
            <Dialog
                text='RGB saturation'
                onCancel={this.props.onCancel}
                onOk={() => this.props.onOk({...this.state})}
            >
                <RangeSlider
                    {...rangeSliderProps}
                    value={rSaturate}
                    updateValue={updateRedSaturation}
                    inputClass='range-slider__range--red'
                />
                <RangeSlider
                    {...rangeSliderProps}
                    value={gSaturate}
                    updateValue={updateGreenSaturation}
                    inputClass='range-slider__range--green'
                />
                <RangeSlider
                    {...rangeSliderProps}
                    value={bSaturate}
                    updateValue={updateBlueSaturation}
                    inputClass='range-slider__range--blue'
                />
            </Dialog>
        );
    }
}

SaturationDialog.propTypes = {
    onOk: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
};

export default SaturationDialog;
