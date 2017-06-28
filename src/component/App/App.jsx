import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Nav from '../Nav/Nav';
import Toolbar from '../Toolbar/Toolbar';
import NoiseDialog from '../NoiseDialog';
import SaturationDialog from '../SaturationDialog';
import BrightnessDialog from '../BrightnessDialog';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import ImageContainer from '../ImageContainer/ImageContainer';
import CanvasWrapper from '../../CanvasWrapper';
import PixelOperationCommand from '../../command/PixelOperationCommand';
import FlipCanvasCommand from '../../command/FlipCanvasCommand';
import {grayscale, invertColors, noise, brightness, sepia, saturate} from '../../pixelOperations';
import {downloadImage} from '../../utils';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imageName: null,
            currentDialog: null,
            isSpinnerLoading: false
        };
    }

    componentDidMount() {
        const canvasElement = ReactDOM.findDOMNode(this.refs.imageContainer.refs.canvas);
        this.canvasWrapper = new CanvasWrapper(canvasElement);
        document.addEventListener('keydown', this.onKeyDown);
    }

    onKeyDown = (event) => {
        if (this.state.currentDialog && event.keyCode === 27) {
           this.closeDialog();
        }
    }

    /**
     * @param {Image} image
     */
    onImageLoad = (image) => {
        this.canvasWrapper.drawImageElement(image);
        this.setState({imageName: image.name});
        this.props.commandManager.clearHistory();
    }

    getToolbarProps() {
        const {commandManager} = this.props;

        return {
            onUndo: () => commandManager.undo(),
            onRedo: () => commandManager.redo(),
            onGreyScale: () => commandManager.push(new PixelOperationCommand(this.canvasWrapper, grayscale)),
            onInvertColors: () => commandManager.push(new PixelOperationCommand(this.canvasWrapper, invertColors)),
            onFlipVertical: () => commandManager.push(new FlipCanvasCommand(this.canvasWrapper, true)),
            onFlipHorizontal: () => commandManager.push(new FlipCanvasCommand(this.canvasWrapper, false)),
            onSepia: () => commandManager.push(new PixelOperationCommand(this.canvasWrapper, sepia)),
            onNoise: () => this.setState({currentDialog: 'noise'}),
            onSaturate: () => this.setState({currentDialog: 'saturation'}),
            onBrightness: () => this.setState({currentDialog: 'brightness'}),
        };
    }

    closeDialog = () => {
        this.setState({currentDialog: null});
    }

    downloadImage = () => {
        this.setState({isSpinnerLoading: true});

        // Temporary workaround. I can't figure out why React do not update state even after forceUpdate() call
        setTimeout(() => {
            downloadImage(this.canvasWrapper.getImageAsUrl(), this.state.imageName);
            this.setState({isSpinnerLoading: false});
        }, 1000);
    }

    render() {
        const {commandManager} = this.props;
        const {currentDialog, isSpinnerLoading} = this.state;

        const onNoiseOk = (noiseLevel) =>
            commandManager.push(new PixelOperationCommand(this.canvasWrapper, noise.bind(null, noiseLevel)));
        const onBrightnessOk = (brightnessLevel) =>
            commandManager.push(new PixelOperationCommand(this.canvasWrapper, brightness.bind(null, brightnessLevel)));
        const onSaturationOk = ({rSaturate, gSaturate, bSaturate}) =>
            commandManager.push(new PixelOperationCommand(this.canvasWrapper, saturate.bind(null, rSaturate, gSaturate, bSaturate)));

        return (
            <div id='app-container'>
                <Nav handleSave={this.downloadImage}/>
                <ImageContainer onImageLoad={this.onImageLoad} ref='imageContainer' fileReader={new FileReader()}/>
                <LoadingSpinner isLoading={isSpinnerLoading}/>
                <Toolbar {...this.getToolbarProps()}/>

                {currentDialog === 'noise' && <NoiseDialog onOk={onNoiseOk} onCancel={this.closeDialog}/>}
                {currentDialog === 'brightness' && <BrightnessDialog onOk={onBrightnessOk} onCancel={this.closeDialog}/>}
                {currentDialog === 'saturation' && <SaturationDialog onOk={onSaturationOk} onCancel={this.closeDialog}/>}
            </div>
        );
    }
};

export default App;
