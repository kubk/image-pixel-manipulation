import React from 'react'
import { shallow } from 'enzyme'
import RangeSlider from '../../src/component/RangeSlider/RangeSlider'

describe('<RangeSlider/>', () => {
    const rangeSliderProps = {
        min: 1,
        max: 10,
        value: 5,
        step: 1
    }

    it('renders without crashing', () => {
        shallow(<RangeSlider {...rangeSliderProps} updateValue={jest.fn()}/>)
    })

    const updateValue = jest.fn()
    const rangeSlider = shallow(<RangeSlider {...rangeSliderProps} updateValue={updateValue}/>)

    it('renders passed values', () => {
        expect(rangeSlider.text()).toContain(rangeSliderProps.min)
        expect(rangeSlider.text()).toContain(rangeSliderProps.max)
        expect(rangeSlider.text()).toContain(rangeSliderProps.value)
    })

    it('calls updateValue prop with a new value', () => {
        const newValue = 4
        const onChangeEvent = {target: {value: newValue}}
        rangeSlider.find('input[type="range"]').simulate('change', onChangeEvent)

        expect(updateValue).lastCalledWith(newValue)
    })

    it('does not allow to set value bigger than max', () => {
        rangeSlider.find('input[type="range"]').simulate('change', {target: {value: 999}})

        expect(updateValue).lastCalledWith(rangeSliderProps.max)
    })

    it('does not allow to set value less than min', () => {
        rangeSlider.find('input[type="range"]').simulate('change', {target: {value: -999}})

        expect(updateValue).lastCalledWith(rangeSliderProps.min)
    })
})
