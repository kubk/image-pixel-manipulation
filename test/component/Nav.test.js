import React from 'react';
import { shallow } from 'enzyme';
import Nav from '../../src/component/Nav/Nav';

describe('<Nav/>', () => {
    it('renders without crashing', () => {
        shallow(<Nav />);
    });

    it('triggers handleSave on click', () => {
        const handleSaveSpy = jest.fn();
        const nav = shallow(<Nav handleSave={handleSaveSpy}/>);
        nav.find('[name="download"]').simulate('click');
        expect(handleSaveSpy).toBeCalled();
    });
});
