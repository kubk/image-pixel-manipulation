import React, { Component } from 'react'
import Dialog from './Dialog'
import RangeSlider from '../RangeSlider/RangeSlider'
import * as filters from '../../canvas/filters'
import { connect } from 'react-redux'
import { applyFilter, closePopup } from '../../actions/index'

class BrightnessPopUp extends Component {
    state = {
        brightness: 0
    }

    render() {
        const { dispatch } = this.props
        const { brightness } = this.state

        return (
            <Dialog
                text='Brightness'
                onConfirm={() => dispatch(applyFilter(filters.brightness.bind(null, brightness)))}
                onClose={() => dispatch(closePopup('brightness'))}
            >
                <RangeSlider
                    min={-255}
                    max={255}
                    step={1}
                    value={brightness}
                    updateValue={value => this.setState({brightness: value})}
                />
            </Dialog>
        )
    }
}

export default connect()(BrightnessPopUp)