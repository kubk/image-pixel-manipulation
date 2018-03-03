import React, {Component} from 'react'
import Dialog from './Dialog'
import RangeSlider from '../RangeSlider/RangeSlider'
import { connect } from 'react-redux'
import * as filters from '../../canvas/filters'
import { applyFilter, closePopup } from '../../actions/index'

class NoiseDialog extends Component {
    state = {
        noiseLevel: 0
    }

    render() {
        const { noiseLevel } = this.state
        const { dispatch } = this.props

        return (
            <Dialog
                text='Noise level'
                onConfirm={() => dispatch(applyFilter(filters.noise.bind(null, noiseLevel)))}
                onClose={() => dispatch(closePopup('noise'))}
            >
                <RangeSlider
                    min={0}
                    max={255}
                    step={1}
                    value={noiseLevel}
                    updateValue={value => this.setState({noiseLevel: value})}
                />
            </Dialog>
        )
    }
}

export default connect()(NoiseDialog)