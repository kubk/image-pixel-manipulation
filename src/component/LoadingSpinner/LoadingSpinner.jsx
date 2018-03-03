import React from 'react'
import './LoadingSpinner.css'
import { connect } from 'react-redux'

const LoadingSpinner = ({ isImageDownloading }) => {
    if (!isImageDownloading) {
        return null
    }

    return (
        isImageDownloading && <div className="loading-spinner">
            <i className="fa fa-spinner fa-spin"/>
        </div>
    )
}

export default connect(
    state => ({
        isImageDownloading: state.canvas.present.isImageDownloading
    })
)(LoadingSpinner)


