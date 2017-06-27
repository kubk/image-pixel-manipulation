import React from 'react'
import { shallow } from 'enzyme'
import Toolbar from '../../src/component/Toolbar/Toolbar'

describe('<Toolbar/>', () => {
    it('renders without crashing', () => {
        shallow(<Toolbar />)
    })

    it('triggers undo and redo', () => {
        const onUndo = jest.fn()
        const onRedo = jest.fn()
        const toolbarProps = {onUndo, onRedo}

        const toolbar = shallow(<Toolbar {...toolbarProps}/>)
        toolbar.find('[title="Undo"]').simulate('click')
        expect(onUndo).toBeCalled()

        toolbar.find('[title="Redo"]').simulate('click')
        expect(onRedo).toBeCalled()
    })
})
