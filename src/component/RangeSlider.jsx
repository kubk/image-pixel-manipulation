import React, {Component} from 'react';

export default class RangeSlider extends Component {
    constructor(props) {
        super(props);
        const averageMinMax = Math.ceil((props.max + props.min) / 2);
        this.state = {value: averageMinMax};
    }

    handleChange = (event) => {
        const {max} = this.props;
        const inputNumber = +event.target.value;
        const displayNumber = (inputNumber > max) ? max : inputNumber;

        this.setState({value: displayNumber});
    }

    render() {
        const {min, max, step} = this.props;

        return (
          <div className="range-slider">
            <span className="range-slider__bound">{min}</span>
            <input
              className="range-slider__range"
              type="range"
              name="slider"
              min={min}
              max={max}
              step={step}
              value={this.state.value}
              onChange={this.handleChange}
            />
            <span className="range-slider__bound">{max}</span>
            <input
              className="range-slider__input"
              type="number"
              name="input"
              min={min}
              max={max}
              step={step}
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
        );
    }
}
