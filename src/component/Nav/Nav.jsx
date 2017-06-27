import PropTypes from 'prop-types'
import React from 'react'
import './Nav.css'

export default function Nav({ handleSave }) {
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
            onClick={handleSave}
            title='Download the image'
            name='download'
        >
            <span className='fa fa-download'/>
        </a>
    </nav>
}

Nav.propTypes = {
    handleSave: PropTypes.func
}
