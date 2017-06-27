import React from 'react';

export default function Nav({handleSave}) {
    return (
        <nav className='nav'>
            <label className='nav__item' htmlFor='image-upload' title='Upload an image'>
                <span className='fa fa-upload'></span>
            </label>
            <a
                className='nav__item nav__item--right'
                href='https://github.com/hexv'
                target='_blank'
                title='Github repo'
            >
                <span className='fa fa-github'></span>
            </a>
            <a
                className='nav__item nav__item--right'
                onClick={handleSave}
                title='Download the image'
            >
                <span className='fa fa-download'></span>
            </a>
        </nav>
    );
}
