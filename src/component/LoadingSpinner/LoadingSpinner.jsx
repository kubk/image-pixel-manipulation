import PropTypes from 'prop-types';
import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = ({isLoading}) => {
    if (!isLoading) { return null; }

    return (
        <div className="loading-spinner">
            <i className="fa fa-spinner fa-spin"/>
        </div>
    );
};

LoadingSpinner.propTypes = {
    isLoading: PropTypes.bool.isRequired
};

export default LoadingSpinner;
