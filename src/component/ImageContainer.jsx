import React, {Component} from 'react';

export default class ImageContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isImageLoaded: false
        }

        this.onImageLoad = props.onImageLoad;
    }

    readFile = (fileInfo) => {
        if (!fileInfo.type.includes('image')) {
            return alert('Please upload an image');
        }

        const fileReader = new FileReader();

        fileReader.onload = (event) => {
            const image = new Image();
            image.onload = () => this.onImageLoad(image, fileInfo);
            image.src = event.target.result;
            this.setState({isImageLoaded: true});
        };

        fileReader.readAsDataURL(fileInfo);
    }

    preventLoadFileAsNewPage(event) {
        event.preventDefault();
    }

    onDrop = (event) => {
        this.readFile(event.dataTransfer.files[0]);
        event.preventDefault();
    }

    onInputChange = (event) => {
        this.readFile(event.target.files[0]);
    }

    render() {
        const {isImageLoaded} = this.state;

        return (
            <div className='image-container'
                 onDragOver={this.preventLoadFileAsNewPage}
                 onDrop={this.onDrop}
            >
                <canvas ref='canvas'></canvas>
                {isImageLoaded || <p className="help-message">Drop an image here or <label htmlFor="image-upload">select manually</label></p>}
                <form encType="multipart/form-data">
                    <input
                        type="file"
                        name="image-upload"
                        id="image-upload"
                        onChange={this.onInputChange}
                    />
                </form>
            </div>
        )
    }
}
