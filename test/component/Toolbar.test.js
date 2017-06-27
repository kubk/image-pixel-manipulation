import React from 'react';
import { shallow } from 'enzyme';
import Toolbar from '../../src/component/Toolbar/Toolbar';

describe('<Toolbar/>', () => {
    it('renders without crashing', () => {
        shallow(<Toolbar />);
    });

    it('triggers undo and redo', () => {
        const undoSpy = jest.fn();
        const redoSpy = jest.fn();
        const toolbarProps = {onUndo: undoSpy, onRedo: redoSpy};

        const toolbar = shallow(<Toolbar {...toolbarProps}/>);
        toolbar.find('[title="Undo"]').simulate('click');
        expect(undoSpy).toBeCalled();

        toolbar.find('[title="Redo"]').simulate('click');
        expect(redoSpy).toBeCalled();
    });
});
