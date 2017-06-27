import React, {Component} from 'react';
import RangeSlider from './RangeSlider';
import PopUp from './PopUp';
import Nav from './Nav';
import ImageContainer from './ImageContainer';
import CanvasWrapper from "../CanvasWrapper";
import ReactDOM from "react-dom";
import ClearCanvasCommand from "../command/ClearCanvasCommand";
import PixelManipulationCommand from "../command/PixelManipulationCommand";
import {grayscale, flipVertical} from '../pixelManipulation';
import Toolbar from './Toolbar';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imageName: null,
        };
    }

    componentDidMount() {
        const canvasElement = ReactDOM.findDOMNode(this.refs.canvas.refs.canvas);
        this.canvasWrapper = new CanvasWrapper(canvasElement);
    }

    onImageLoad = (image, fileInfo) => {
        this.canvasWrapper.drawImage(image);
        this.setState({imageName: fileInfo.name});
    }

    saveImage = () => {
        saveImage(this.canvasWrapper.getImageAsUrl(), this.state.imageName);
    }

    render() {
        return (
            <div id="app-container">
                <Nav handleSave={this.saveImage}/>

                <ImageContainer onImageLoad={this.onImageLoad} ref='canvas'/>

                <Toolbar/>
            </div>
        );
    }
};

function saveImage(href, imageName) {
    const link = document.createElement('a');
    link.href = href;
    link.download = imageName;
    // In Firefox we need explicitly add new link element to the DOM, otherwise click() will not work
    document.body.appendChild(link);
    link.click();
}
