import PropTypes from 'prop-types'
import React, {Component} from 'react'
import './RangeSlider.css'

export default class RangeSlider extends Component {
    handleChange = (event) => {
        const { max, min, updateValue } = this.props
        const inputNumber = +event.target.value

        let displayNumber;

        if (inputNumber > max) {
            displayNumber = max
        } else if (inputNumber < min) {
            displayNumber = min
        } else {
            displayNumber = inputNumber
        }

        updateValue(displayNumber)
    }

    render() {
        const { min, max, step, value } = this.props
        const inputClass = this.props.inputClass || 'range-slider__range'

        return (
            <div className="range-slider">
                <span className="range-slider__value">{value}</span>
                <span className="range-slider__bound">{min}</span>
                <input
                    className={inputClass}
                    type='range'
                    name='slider'
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={this.handleChange}
                />
                <span className="range-slider__bound">{max}</span>
            </div>
        )
    }
}

RangeSlider.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    step: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    updateValue: PropTypes.func.isRequired,
    inputClass: PropTypes.string
}