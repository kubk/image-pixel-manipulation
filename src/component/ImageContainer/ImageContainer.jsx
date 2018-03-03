import React, {Component} from 'react'
import './ImageContainer.css'
import { connect } from 'react-redux'
import { imageUploaded } from '../../actions/index'

class ImageContainer extends Component {
    onDrop = (event) => {
        event.preventDefault()
        this.readFile(event.dataTransfer.files[0])
    }

    onInputChange = (event) => {
        this.readFile(event.target.files[0])
    }

    readFile = (fileInfo) => {
        if (!fileInfo.type.includes('image')) {
            return alert('Please upload an image')
        }

        const { dispatch } = this.props

        const fileReader = new FileReader()

        fileReader.onload = (event) => {
            const image = new Image()
            image.src = event.target.result
            image.name = fileInfo.name
            image.onload = () => dispatch(imageUploaded(image))
        }

        fileReader.readAsDataURL(fileInfo)
    }

    render() {
        const { isImageUploaded } = this.props

        return (
            <div className='image-container'
                 onDragOver={event => event.preventDefault()}
                 onDrop={this.onDrop}
            >
                <canvas id={'test'}/>
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

export default connect(
    state => ({
        isImageUploaded: !! state.canvas.present.image
    })
)(ImageContainer)
