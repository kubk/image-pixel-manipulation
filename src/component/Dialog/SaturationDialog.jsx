import React, {Component} from 'react'
import RangeSlider from '../RangeSlider/RangeSlider'
import Dialog from './Dialog'
import { connect } from 'react-redux'
import * as filters from '../../canvas/filters'
import { applyFilter, closePopup } from '../../actions/index'

class SaturationDialog extends Component {
    state = {
        red: 1,
        green: 1,
        blue: 1
    }

    render() {
        const { red, green, blue } = this.state
        const { dispatch } = this.props
        const rangeSliderProps = { min: 0, max: 2, step: 0.1 }

        return (
            <Dialog
                text='RGB saturation'
                onConfirm={() => dispatch(applyFilter(filters.saturate.bind(null, red, green, blue)))}
                onClose={() => dispatch(closePopup('saturation'))}
            >
                <RangeSlider
                    {...rangeSliderProps}
                    value={red}
                    updateValue={value => this.setState({red: value})}
                    inputClass='range-slider__range--red'
                />
                <RangeSlider
                    {...rangeSliderProps}
                    value={green}
                    updateValue={value => this.setState({green: value})}
                    inputClass='range-slider__range--green'
                />
                <RangeSlider
                    {...rangeSliderProps}
                    value={blue}
                    updateValue={value => this.setState({blue: value})}
                    inputClass='range-slider__range--blue'
                />
            </Dialog>
        )
    }
}

export default connect()(SaturationDialog)