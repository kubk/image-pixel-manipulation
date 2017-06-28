import PropTypes from 'prop-types';
import React, {Component} from 'react';
import './ImageContainer.css';

class ImageContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isImageUploaded: false
        }
    }

    readFile = (fileInfo) => {
        if (!fileInfo.type.includes('image')) {
            return alert('Please upload an image');
        }

        const {fileReader} = this.props;

        fileReader.onload = (event) => {
            const image = new Image();
            image.src = event.target.result;
            image.name = fileInfo.name;
            image.onload = () => this.props.onImageLoad(image);
            this.setState({isImageUploaded: true});
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
        const {isImageUploaded} = this.state;

        return (
            <div className='image-container'
                 onDragOver={this.preventLoadFileAsNewPage}
                 onDrop={this.onDrop}
            >
                <canvas ref='canvas'/>
                {isImageUploaded || <p className="help-message">Drop an image here or <label htmlFor="image-upload">select manually</label></p>}
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

ImageContainer.propTypes = {
    onImageLoad: PropTypes.func,
    fileReader: PropTypes.object.isRequired
};

export default ImageContainer;