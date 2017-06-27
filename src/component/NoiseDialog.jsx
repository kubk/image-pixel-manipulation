import PropTypes from 'prop-types'
import React, {Component} from 'react'
import Dialog from './Dialog/Dialog'
import RangeSlider from './RangeSlider/RangeSlider'

export default class NoiseDialog extends Component {
    state = {
        noiseLevel: 0,
    }

    updateValue = (noiseLevel) => {
        this.setState({noiseLevel})
    }

    render() {
        return (
            <Dialog
                text='Noise level'
                onCancel={this.props.onCancel}
                onOk={() => this.props.onOk(this.state.noiseLevel)}
            >
                <RangeSlider
                    min={0}
                    max={255}
                    step={1}
                    value={this.state.noiseLevel}
                    updateValue={this.updateValue}
                />
            </Dialog>
        )
    }
}

NoiseDialog.propTypes = {
    onOk: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
}
