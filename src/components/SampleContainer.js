import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SampleContainer extends Component {
    render() {
        if (this.props.isMainTextVisible) {
            return (<p>Sample text with main text!</p>);   
        } else {
            return (<p>Just sample text!</p>);
        }
    }
}

SampleContainer.propTypes = {
    isMainTextVisible: PropTypes.bool.isRequired
};

export default SampleContainer;
