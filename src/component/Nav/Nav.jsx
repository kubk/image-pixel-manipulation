import React from 'react'
import './Nav.css'
import { connect } from 'react-redux'
import { downloadCanvasImage } from '../../canvas/helpers'
import { imageDownloading } from '../../actions/index'

class Nav extends React.Component {
    downloadImage = () => {
        const { image, dispatch } = this.props

        if (!image) {
            return alert('Image is empty')
        }

        dispatch(imageDownloading(true))

        setTimeout(() => {
            downloadCanvasImage(image.name)
            dispatch(imageDownloading(false))
        }, 1000)
    }

    render() {
        return <nav className='nav'>
            <label className='nav__item' htmlFor='image-upload' title='Upload an image'>
                <span className='fa fa-upload'/>
            </label>
            <a
                className='nav__item nav__item--right'
                href='https://github.com/kubk/image-pixel-manipulation'
                target='_blank'
                title='Github repo'
            >
                <span className='fa fa-github'/>
            </a>
            <a
                className='nav__item nav__item--right'
                onClick={this.downloadImage}
                title='Download the image'
                name='download'
            >
                <span className='fa fa-download'/>
            </a>
        </nav>
    }
}

export default connect(
    state => ({
        image: state.canvas.present.image
    })
)(Nav)
