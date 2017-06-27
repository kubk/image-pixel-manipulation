import React from 'react'
import { shallow } from 'enzyme'
import LoadingSpinner from '../../src/component/LoadingSpinner/LoadingSpinner'

describe('<LoadingSpinner/>', () => {
    it('renders without crashing', () => {
        shallow(<LoadingSpinner isLoading={true}/>)
    })

    it('does not render when isLoading is false', () => {
        const spinner = shallow(<LoadingSpinner isLoading={false}/>)
        expect(spinner.type()).toBeFalsy()
    })
})
