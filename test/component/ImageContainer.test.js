import React from 'react';
import { shallow } from 'enzyme';
import ImageContainer from '../../src/component/ImageContainer/ImageContainer';
import * as fs from 'fs';

const dummyFileReader = {
    readAsDataURL() {
        const imageLoadEvent = {target: {result: 'image as base64'}};
        this.onload(imageLoadEvent);
    }
};

describe('<ImageContainer/>', () => {
    it('renders without crashing', () => {
        shallow(<ImageContainer fileReader={dummyFileReader}/>);
    });

    it('contains help message by default', () => {
        const imageContainer = shallow(<ImageContainer fileReader={dummyFileReader}/>);
        expect(imageContainer.find('.help-message')).toHaveLength(1);
    });

    it('changes state when an image was uploaded', () => {
        const imageContainer = shallow(<ImageContainer fileReader={dummyFileReader}/>);

        const fileToUpload = {type: 'image/png', name: 'test.png'};
        const imageUploadEvent = {target: {files: [fileToUpload]}};
        imageContainer.find('#image-upload').simulate('change', imageUploadEvent);

        expect(imageContainer.state('isImageUploaded')).toBeTruthy();
    });
});
