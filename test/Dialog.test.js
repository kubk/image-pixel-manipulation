import React from 'react'
import { shallow } from 'enzyme'
import Dialog from '../src/component/Dialog/Dialog'

describe('<Dialog/>', () => {
    it('triggers onConfirm and onClose', () => {
        const onConfirm = jest.fn()
        const onClose = jest.fn()
        const dialogProps = {onConfirm, onClose}

        const dialog = shallow(<Dialog {...dialogProps}/>)
        dialog.find('[title="Ok"]').simulate('click')
        expect(onConfirm).toBeCalled()

        dialog.find('[title="Cancel"]').simulate('click')
        expect(onClose).toBeCalled()
    })

    it('should render children when passed in', () => {
        const dialog = shallow((
          <Dialog onConfirm={jest.fn()} onClose={jest.fn()}>
            <div className='first'/>
            <div className='second'/>
          </Dialog>
        ))

        expect(dialog.contains(<div className='first'/>)).toBeTruthy()
        expect(dialog.contains(<div className='second'/>)).toBeTruthy()
    })
})
