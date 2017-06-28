import React from 'react';
import { shallow } from 'enzyme';
import Dialog from '../../src/component/Dialog/Dialog';

describe('<Dialog/>', () => {
    it('triggers onOk and onCancel', () => {
        const onOk = jest.fn();
        const onCancel = jest.fn();
        const dialogProps = {onOk, onCancel};

        const dialog = shallow(<Dialog {...dialogProps}/>);
        dialog.find('[title="Ok"]').simulate('click');
        expect(onOk).toBeCalled();

        dialog.find('[title="Cancel"]').simulate('click');
        expect(onCancel).toBeCalled();
    });

    it('should render children when passed in', () => {
        const dialog = shallow((
          <Dialog onOk={jest.fn()} onCancel={jest.fn()}>
            <div className='first'/>
            <div className='second'/>
          </Dialog>
        ));

        expect(dialog.contains(<div className='first'/>)).toBeTruthy();
        expect(dialog.contains(<div className='second'/>)).toBeTruthy();
    });
});
