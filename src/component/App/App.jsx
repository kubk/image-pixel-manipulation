import React from 'react'
import Nav from '../Nav/Nav'
import Toolbar from '../Toolbar/Toolbar'
import NoiseDialog from '../Dialog/NoiseDialog'
import SaturationDialog from '../Dialog/SaturationDialog'
import BrightnessDialog from '../Dialog/BrightnessDialog'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import ImageContainer from '../ImageContainer/ImageContainer'
import './App.css'
import { connect } from 'react-redux'

const App = ({ popup }) => {
    return (
        <div id='app-container'>
            <Nav/>
            <ImageContainer/>
            <LoadingSpinner/>
            <Toolbar/>
            {popup.noise && <NoiseDialog/>}
            {popup.brightness && <BrightnessDialog/>}
            {popup.saturation && <SaturationDialog/>}
        </div>
    )
}

export default connect(
    state => ({
        popup: state.popup
    })
)(App)
